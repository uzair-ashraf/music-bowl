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
    const signUpButtonStyle = {
      display: 'flex',
      justifyContent: 'flex-end'
    }
    return (
      <Container>
        <Row>
          <Col xs='12' style={{ marginTop: '2rem' }}>
            <BigButton
              content='/images/logo.png'
              color='blue'
              link={'/'}
              image={true}
            />
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Col xs='6'>
              <BigButton
                content='Login'
                color='blue'
                link={'login'}
                image={false}
              />
            </Col>
          </Col>
          <Col xs='12' style={signUpButtonStyle}>
            <Col xs="6" />
            <Col xs='6' style={{ marginRight: '2rem' }}>
              <BigButton
                content='Sign Up'
                color='purple'
                link={'/signup'}
                image={false}
              />
            </Col>
          </Col>
        </Row>
      </Container>
    )
  }

}
