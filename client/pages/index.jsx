import React, { Component } from 'react'
import BigButton from '../components/big-button'
import { Container, Row, Col } from 'reactstrap'

export default class Index extends Component {

  render() {
    const loginButtonStyle = {
      display: 'flex'
    }
    return (
      <Container>
        <Row>
          <Col xs='12'>
            <BigButton
              content='/images/logo.png'
              color='blue'
              callBack={null}
              image={true}
            />
          </Col>
        </Row>
        <Row>
          <Col xs='12'>
            <Col xs='6' style={loginButtonStyle}>
              <BigButton
                content='Login'
                color='blue'
                callBack={null}
                image={false}
              />
            </Col>
            <Col xs="6"/>
          </Col>

          <Col xs='6'>
            <BigButton
              content='Sign Up'
              color='purple'
              callBack={null}
              image={false}
            />
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
