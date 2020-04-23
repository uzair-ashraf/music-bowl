import React, { Component } from 'react'
import Layout from '../components/layout'
import { Row, Col } from 'reactstrap'
import Heading from '../components/heading'
import CategoryButton from '../components/category-button'
import LibrarySong from '../components/library-song'
import requireAuth from '../../services/require-auth'
import Loader from '../components/loader'
import {FrontEndError} from '../../services/errorhandling'


export default class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uploads: [],
      favorites: [],
      isLoading: true,
      selectedSong: null,
      view: 'Uploads'
    }
    this.switchView = this.switchView.bind(this)
    this.selectSong = this.selectSong.bind(this)
    this.deleteSong = this.deleteSong.bind(this)
  }

  static async getInitialProps(ctx) {
    requireAuth(ctx, typeof Window === 'undefined')
    return {}
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/library')
      const libraryData = await response.json()
      libraryData.isLoading = false
      this.setState(libraryData)
    } catch (err) {
      console.log(err)
    }
  }

  switchView(view) {
    this.setState({ view })
  }

  selectSong(selectedSong) {
    this.setState({ selectedSong })
  }

  deleteSong(e, id) {
    e.stopPropagation()
    this.setState({ isLoading: true }, async () => {
      try {
        const response = await fetch(`/api/library/${id}`, {
          method: 'DELETE'
        })
        const data = await response.json()
        if (response.status === 400) await Promise.reject(new FrontEndError(data.message))
        const { song_id } = data
        const uploads = this.state.uploads.filter(song => song.song_id !== song_id)
        this.setState({uploads, isLoading: false})
      } catch(err) {
        console.error(err)
      }
    })
  }

  render() {
    const { isLoading, view, uploads, favorites, selectedSong } = this.state
    return (
      <Layout>
        <Heading
          heading='Library'
        />
        <Row>
          <Col xs='12'>
            <div className='d-flex justify-content-around mt-2'>
              <CategoryButton
                color='blue'
                heading='Uploads'
                active={view === 'Uploads'}
                switchView={this.switchView}
              />
              <CategoryButton
                color='purple'
                heading='Favorites'
                active={view === 'Favorites'}
                switchView={this.switchView}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='12' className="mt-2">
            {
              isLoading
                ? (
                  <div className='d-flex justify-content-center'>
                    <Loader />
                  </div>
                )
                : (
                  view === 'Uploads'
                    ? (
                      uploads.map(song => (
                        <LibrarySong
                          key={song.song_id}
                          selectSong={this.selectSong}
                          deleteSong={this.deleteSong}
                          isOpen={selectedSong === song.song_id}
                          {...song}
                        />
                      ))
                    )
                    : (
                      null
                    )
                )
            }
          </Col>
        </Row>
      </Layout>
    )
  }
}