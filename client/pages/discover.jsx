import React, { Component } from 'react'
import Layout from '../components/layout'
import requireAuth from '../../services/require-auth'
import { Container, Row, Col } from 'reactstrap'
import Heading from '../components/heading'
import GenreButton from '../components/genre-button'
import Loader from '../components/loader'
import Link from 'next/link'
import DiscoverSong from '../components/discover-song'

export default class Discover extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedGenre: null,
      genres: [],
      songs: [],
      isLoading: true
    }
    this.setGenre = this.setGenre.bind(this)
    this.getSongs = this.getSongs.bind(this)
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/genres')
      const genres = await response.json()
      this.setState({ genres })
    } catch (err) {
      console.error(err.message)
    }
  }

  static async getInitialProps(ctx) {
    requireAuth(ctx, typeof Window === 'undefined')
    return {}
  }

  setGenre(selectedGenre) {
    this.setState({ selectedGenre }, this.getSongs)
  }

  async getSongs() {
    const {selectedGenre} = this.state
    try {
      const response = await fetch(`/api/songs/${selectedGenre}`)
      const songs = await response.json()
      this.setState({songs, isLoading: false})
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { selectedGenre, genres, isLoading, songs } = this.state
    return (
      selectedGenre
        ? (
          <Layout>
            {
              isLoading
              ? (
                <div className="d-flex justify-content-center h-100 align-items-center">
                    <Loader />
                </div>
              )
              : (
                songs.length
                ? (
                  <>
                    <Heading
                      username={songs[0].username}
                    />
                    <DiscoverSong
                      {...songs[0]}
                    />
                  </>
                )
                : (
                  <div className="d-flex justify-content-center h-100 align-items-center">
                    <div className="text-center">
                      Seems like there are no songs recommended for this genre.
                      Would you like to &nbsp;
                      <span>
                        <Link href="/upload">
                          <a>
                            recommend a song
                          </a>
                        </Link>
                      </span>
                      &nbsp; for this genre?
                    </div>
                  </div>
                )
              )
            }
          </Layout>
        )
        : (
          <Container>
            <Row>
              <Col xs='12' className="m-2">
                <Heading
                  heading='Select a Genre'
                />
                <Row>
                  {
                    genres.map((genre, index) => (
                      <Col xs='6'
                        key={genre.genre_id}
                      >
                        <GenreButton
                          onClick={this.setGenre}
                          heading={genre.genre}
                          color={index % 2 === 0 ? 'purple' : 'blue'}
                          genreId={genre.genre_id}
                        />
                      </Col>
                    ))
                  }
                </Row>
              </Col>
            </Row>
          </Container>
        )
    )
  }
}
