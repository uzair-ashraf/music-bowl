import React, { Component } from 'react'
import Layout from '../components/layout'
import { Row, Col } from 'reactstrap'
import Heading from '../components/heading'
import CategoryButton from '../components/category-button'
import LibrarySong from '../components/library-song'
import requireAuth from '../../services/require-auth'

export default class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uploads: [],
      favorites: []
    }
  }

  static async getInitialProps(ctx) {
    requireAuth(ctx, typeof Window === 'undefined')
    return {}
  }

  render() {
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
                active={true}
              />
              <CategoryButton
                color='purple'
                heading='Favorites'
                active={false}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs='12' className="mt-2">
            <LibrarySong

            />
          </Col>
        </Row>
      </Layout>
    )
  }
}
