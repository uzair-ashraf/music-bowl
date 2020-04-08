import React, { Component } from 'react'
import BigButton from '../components/big-button'
import { Container, Row, Col } from 'reactstrap'

export default class Index extends Component {

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
            <Col xs='6' style={{marginRight: '2rem'}}>
              <BigButton
                content='Sign Up'
                color='purple'
                link={'/signup'}
                image={false}
              />
            </Col>
          </Col>
        </Row>
        <style jsx global>
          {
            `
            @font-face {
            font-family: 'Roboto';
            src: url('/fonts/roboto/Roboto-light.ttf');
            font-display: auto;
            font-style: normal;
            }
            `
          }
        </style>
      </Container>
    )
  }

}
