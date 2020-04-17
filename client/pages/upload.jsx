import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import requireAuth from '../../services/require-auth'
import BigButton from '../components/big-button'
import Heading from '../components/heading'

export default class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: '',
      genres: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  static async getInitialProps(ctx) {
    requireAuth(ctx, typeof Window === 'undefined')
    return {}
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: [value] })
  }

  render() {
    const {url, genres} = this.state
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
                  <form id="uploadForm" className="mx-auto text-center mt-3">
                    <input
                      name="url"
                      onChange={this.handleChange}
                      placeholder='Enter URL Here'
                      value={url}
                      className="m-2"
                    />
                    <select
                    disabled={!genres.length}
                    className="m-2"
                    >
                      <option>Select a genre</option>

                    </select>
                  </form>
                </div>
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
            `}
        </style>
      </Container>
    )
  }
}
