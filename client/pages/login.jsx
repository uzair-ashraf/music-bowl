import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    console.log(this.state)
  }

  handleChange({target: { name, value} }) {
    this.setState({[name]: value}, () => console.log(this.state))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs='12'>
            <form>
              <input name="username" onChange={this.handleChange} />
              <input name="password" onChange={this.handleChange} />
                  <div className="swirl-button" onClick={this.handleSubmit}>
                   Login
                  </div>
                  <style jsx>
                    {
                    `
                    .swirl-button {
                      background-image: url('/images/blue-swirl.png');
                      border-radius: 50%;
                      height: 160px;
                      width: 160px;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin: 0 auto;
                      margin-top: 2rem;
                      color: white;
                      font-family: 'Roboto';
                      font-size: 2.8rem;
                      box-shadow: 7px 13px 20px rgba(0, 0, 0, 0.25);
                    }
                    `
                    }
                  </style>
            </form>
          </Col>
        </Row>
      </Container>
    )
  }
}
