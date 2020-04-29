import React, { Component } from 'react'
import Layout from '../components/layout'
import requireAuth from '../../services/require-auth'
import { Container, Row, Col } from 'reactstrap'
import Heading from '../components/heading'
import GenreButton from '../components/genre-button'
import Loader from '../components/loader'
import Link from 'next/link'
import DiscoverSong from '../components/discover-song'
import DiscoverButton from '../components/discover-button'
import {FrontEndError} from '../../services/errorhandling'

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
    this.resetDiscover = this.resetDiscover.bind(this)
    this.nextSong = this.nextSong.bind(this)
    this.favoriteSong = this.favoriteSong.bind(this)
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
    let {selectedGenre, genres} = this.state
    if(selectedGenre === "random") {
      selectedGenre = genres[Math.floor(Math.random() * genres.length)].genre_id
    }
    try {
      const response = await fetch(`/api/discover/${selectedGenre}`)
      const songs = await response.json()
      this.setState({songs, isLoading: false})
    } catch (err) {
      console.error(err)
    }
  }
  async favoriteSong() {
    this.setState({isLoading: true})
    try {
      const [song] = this.state.songs
      const response = await fetch(`/api/discover/${song.song_id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const data = response.json()
      if(!response.ok) await Promise.reject(new FrontEndError(data.message))
      this.setState({isLoading: false}, this.nextSong)
    } catch(err) {
      console.error(err)
    }

  }

  resetDiscover() {
    this.setState({
      selectedGenre: null,
      songs: [],
      isLoading: true
    })
  }

  nextSong() {
    const songs = [...this.state.songs]
    songs.shift()
    this.setState({songs})
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
                    <div className="mt-2">
                      <Heading
                        username={songs[0].username}
                      />
                    </div>
                    <DiscoverSong
                      {...songs[0]}
                    />
                    <Row className="mb-2">
                        <Col xs='4'>
                          <DiscoverButton
                            icon='songskip'
                            heading='Next Song'
                            color='purple'
                            onClick={this.nextSong}
                            disabled={isLoading}
                          />
                        </Col>
                        <Col xs='4'>
                          <DiscoverButton
                            icon='newgenre'
                            heading='New Genre'
                            color='blue'
                            onClick={this.resetDiscover}
                            disabled={isLoading}
                          />
                        </Col>
                        <Col xs='4'>
                          <DiscoverButton
                            icon='favorite'
                            heading='Favorite'
                            color='purple'
                            onClick={this.favoriteSong}
                            disabled={isLoading}
                          />
                        </Col>
                    </Row>
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
                      &nbsp; for this genre? &nbsp;
                          Or would you like to &nbsp;
                      <span onClick={this.resetDiscover}>
                        <Link href="/discover">
                          <a>
                            select a new genre?
                          </a>
                        </Link>
                      </span>
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
                <div className="m-2">
                  <Heading
                  heading='Select a Genre'
                  />
                </div>
                <Row>
                  <Col
                  xs='6'
                  sm='4'
                  md='3'
                  lg='2'
                  >
                    <GenreButton
                      onClick={this.setGenre}
                      heading="All"
                      color='purple'
                      genreId="all"
                    />
                  </Col>
                  <Col
                  xs='6'
                  sm='4'
                  md='3'
                  lg='2'
                  >
                    <GenreButton
                      onClick={this.setGenre}
                      heading="Random"
                      color='blue'
                      genreId="random"
                    />
                  </Col>
                  {
                    genres.map((genre, index) => (
                      <Col
                      xs='6'
                      sm='4'
                      md='3'
                      lg='2'
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
