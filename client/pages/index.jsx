import React, { Component } from 'react'
import BigButton from '../components/big-button'
import { Container, Row, Col } from 'reactstrap'

export default class Index extends Component {
  static async getInitialProps(ctx) {
    if (typeof Window === 'undefined') {
      if (ctx.req.session.userId) {
        console.log('redirecting..')
        ctx.res.redirect('/home')
        ctx.res.end()
        return {}
      }
    }
    return {}
  }

  render() {
    return (
      <Container className="login-container">
        <Row>
          <Col xs='12' className="mt-2">
            <BigButton
              content='/images/logo.png'
              color='blue'
              link={'/'}
              image={true}
            />
          </Col>
        </Row>
        <Row className="login-button-container">
          <Col xs='6'>
            <BigButton
              content='Login'
              color='blue'
              link={'login'}
              image={false}
              className="login-button"
            />
          </Col>
          <Col xs='6'>
            <BigButton
              content='Sign Up'
              color='purple'
              link={'/signup'}
              image={false}
              className="login-button"
            />
          </Col>
        </Row>
      </Container>
    )
  }

}
