import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import requireAuth from '../../services/require-auth'
import BigButton from '../components/big-button'
import SmallButton from '../components/small-button'
import Heading from '../components/heading'
import YouTube from 'react-youtube';
import {FrontEndError} from '../../services/errorhandling'

export default class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      genres: [],
      selectedGenre: '',
      validatedUrl: null,
      errorMessage: '',
      title: null,
      isLoading: false,
      uploadResponse: {
        success: false,
        message: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUrlTest = this.handleUrlTest.bind(this)
    this.extractYoutubeData = this.extractYoutubeData.bind(this)
    this.songUpload = this.songUpload.bind(this)
    this.resetUrl = this.resetUrl.bind(this)
  }

  static async getInitialProps(ctx) {
      requireAuth(ctx, typeof Window === 'undefined')
      return {}
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/genres')
      const genres = await response.json()
      this.setState({genres})
    } catch (err) {
      console.error(err.message)
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value , errorMessage: ''})
  }
  resetUrl() {
    this.setState({
      validatedUrl: null,
      title: null,
      selectedGenre: '',
      url: '',
      uploadResponse: {
        success: false,
        message: ''
      }
    })
  }
  async handleUrlTest() {
    const {url} = this.state
    if(!url) return;
    try {
      const response = await fetch('/api/urltester', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url})
      })
      const validatedUrl = response.status === 200
      ? await response.json()
      : await Promise.reject(new FrontEndError('Invalid URL'))
      this.setState({validatedUrl})
    } catch(err) {
      if(err instanceof FrontEndError) {
        this.setState({ errorMessage: err.message, url: '' })
      } else {
        console.error(err)
      }
    }
  }
  async songUpload() {
    if(!this.state.title) return
    this.setState({isLoading: true})
    const {
      title,
      validatedUrl,
      selectedGenre
    } = this.state
    const body = {
      title,
      url: validatedUrl.url,
      video_id: validatedUrl.videoId,
      provider_id: validatedUrl.provider,
      genre_id: Number(selectedGenre)
    }
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    const uploaded = await response.json()
     if(!uploaded.success) await Promise.reject(new FrontEndError(uploaded.message))
     this.setState({
       isLoading: false,
       uploadResponse: {
       success: true,
       message: "Your song has been uploaded!"
     }})
    } catch(err) {
      if(err instanceof FrontEndError) {
        console.log(err.message)
        this.setState({
          isLoading: false,
          uploadResponse: {
            success: false,
            message: err.message
          }
        })
      } else {
        console.error(err)
        this.setState({
          isLoading: false,
          uploadResponse: {
            success: false,
            message: 'Unexpected error has occurred.'
          }
        })
      }
    }
  }
  extractYoutubeData(e) {
    const {title} = e.target.getVideoData()
    this.setState({title})
  }

  render() {
    const {
            url,
            genres,
            validatedUrl,
            errorMessage,
            selectedGenre,
            isLoading,
            uploadResponse
          } = this.state
    return (
      <Container className="inner-page vh-100">
        <Row className="justify-content-center align-items-center vh-100">
          <Col xs='10' className="inner-page-card">
            <Row>
              <Col xs='12'>
                <Heading/>
                {
                  !validatedUrl
                  ? (
                    <BigButton
                      content='/images/logo.png'
                      color='blue'
                      link='/home'
                      image={true}
                    />
                  )
                  : (
                    validatedUrl.provider === 'youtube'
                    ? (
                      <div className="youtube-container mt-5">
                        <YouTube
                          videoId={validatedUrl.videoId}
                          opts={{
                            height: '160',
                            width: '100%'
                          }}
                          onReady={this.extractYoutubeData}
                        />
                      </div>
                    )
                    : (
                      <BigButton
                        content='/images/logo.png'
                        color='blue'
                        link='/home'
                        image={true}
                      />
                    )
                  )
                }
              </Col>
            </Row>
            <Row>
              <Col xs='12'>
                <div
                className="text-center"
                style={{color: uploadResponse.success ? 'green' : 'red'}}>
                  {uploadResponse.message}
                </div>
                <div className="form-container">
                  <form
                  id="uploadForm"
                  className={`mx-auto text-center mt-${!!uploadResponse.message ? '1' : '5'}`}
                  onSubmit={e => e.preventDefault()}
                  >
                    {
                      validatedUrl
                      ? (
                          <select
                            disabled={!genres.length}
                            className="m-2"
                            name="selectedGenre"
                            onChange={this.handleChange}
                            value={selectedGenre}
                          >
                            <option value=''>Select a genre</option>
                            {
                              genres.map(genre => (
                                <option
                                  key={genre.genre_id}
                                  value={genre.genre_id}>
                                  {genre.genre}
                                </option>
                              ))
                            }
                          </select>
                      )
                      : (
                          <input
                            name="url"
                            onChange={this.handleChange}
                            placeholder={!errorMessage.length ? 'Enter URL Here' : errorMessage}
                            value={url}
                            className="m-2"
                          />
                        )
                    }
                  </form>
                </div>
              </Col>
            </Row>
            <Row className=" d-flex justify-content-center align-items-center">
              <Col xs='6'>
                    <SmallButton
                    icon={null}
                    heading='Upload'
                    color='blue'
                    onClick={this.songUpload}
                    disabled={!validatedUrl || !selectedGenre || isLoading}
                    />
              </Col>
              <Col xs='6'>
                    <SmallButton
                    icon={null}
                    heading={validatedUrl ? 'New URL' : 'Add URL'}
                    color='purple'
                    onClick={validatedUrl ? this.resetUrl : this.handleUrlTest}
                    disabled={isLoading}
                    />
              </Col>
            </Row>
          </Col>
        </Row>
        <style jsx>
          {`
            #uploadForm {
             background-image: url('/images/blue-swirl.png');
             border-radius: 16px;
            }
            .swirl-button {
              background-image: url('/images/blue-swirl.png');
            }
            input, select {
              padding: 12px;
              border-radius: 7px;
              font-size: 1.2rem;
              border-style: none;
            }
            input {
              border: ${!!errorMessage.length ? '2px solid red' : 'none'};
            }
            select {
              padding: 6px;
            }
            `}
        </style>
      </Container>
    )
  }
}
