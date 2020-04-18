import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import requireAuth from '../../services/require-auth'
import BigButton from '../components/big-button'
import SmallButton from '../components/small-button'
import Heading from '../components/heading'

export default class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      genres: [],
      selectedGenre: null,
      validatedUrl: null,
      errorMessage: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleUrlTest = this.handleUrlTest.bind(this)
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
      : await Promise.reject(new Error('Invalid URL'))
      this.setState({validatedUrl})
    } catch(err) {
      this.setState({ errorMessage: err.message, url: '' })
    }
  }

  render() {
    const {url, genres, validatedUrl, errorMessage} = this.state
    return (
      <Container className="inner-page vh-100">
        <Row className="justify-content-center align-items-center vh-100">
          <Col xs='10' className="inner-page-card">
            <Row>
              <Col xs='12'>
                <Heading/>
                <BigButton
                  content='/images/logo.png'
                  color='blue'
                  link='/home'
                  image={true}
                />
              </Col>
            </Row>
            <Row>
              <Col xs='12'>
                <div className="form-container">
                  <form
                  id="uploadForm"
                  className="mx-auto text-center mt-5"
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
                          >
                            <option value={null}>Select a genre</option>
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
                    disabled={!validatedUrl}
                    />
              </Col>
              <Col xs='6'>
                    <SmallButton
                    icon={null}
                    heading='Add URL'
                    color='purple'
                    onClick={this.handleUrlTest}
                    disabled={false}
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
