import React, { Component } from 'react'
import BigButton from '../components/big-button'
import MedButton from '../components/med-button'
import { Container, Row, Col } from 'reactstrap'
import requireAuth from '../../services/require-auth'

export default class Home extends Component {
  static async getInitialProps(ctx) {
    requireAuth(ctx, typeof Window === 'undefined')
    return {}
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs='12' style={{ marginTop: '2rem' }}>
            <BigButton
              content='/images/logo.png'
              color='blue'
              link='/home'
              image={true}
            />
          </Col>
        </Row>
        <Row style={{ marginTop: '2rem' }}>
          <Col xs='6'>
            <MedButton
              link='/upload'
              color='purple'
              subheading='Upload'
              icon='upload'
            />
          </Col>
          <Col xs='6'>
            <MedButton
              link='/search'
              color='purple'
              subheading='Search'
              icon='search'
            />
          </Col>
          <Col xs='6'>
            <MedButton
              link='/account'
              color='purple'
              subheading='Account'
              icon='account'
            />
          </Col>
          <Col xs='6'>
            <MedButton
              link='/settings'
              color='purple'
              subheading='Settings'
              icon='settings'
            />
          </Col>

        </Row>
      </Container>
    )
  }
}
