import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import BigButton from '../components/big-button'
import { withRouter } from 'next/router'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      errorMessages: ['', '', '', '']
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit(e) {
    if(!this.errorHandling()) return;
    const {
      username,
      password,
      email
    } = this.state;
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
      })
      console.log(response)
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err.message)
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value, errorMessages: ['', '', '', ''] })
  }

  errorHandling() {
    const {
      username,
      password,
      confirmPassword,
      email
    } = this.state;
    const resetState = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
    }
    const emailTest = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (!username || !password || !confirmPassword || !email) {
      this.setState({
        ...resetState,
        errorMessages: [
          'No empty fields',
          'No empty fields',
          'No empty fields',
          'No empty fields'
        ]
      })
      return false
    }
    if (password !== confirmPassword) {
      this.setState({
        ...resetState,
        errorMessages: ['', 'Passwords don\'t match', 'Passwords don\'t match', '']
      })
      return false
    }

    if(!emailTest.test(email)) {
      this.setState({
        ...resetState,
        errorMessages: ['', '', '', 'Invalid Email']
      })
      return false
    }

    return true
  }


  render() {
    const {
      errorMessages,
      username,
      password,
      confirmPassword,
      email
    } = this.state;
    return (
      <Container>
        <Row>
          <Col xs='12' className="mt-5">
            <div className="form-container">
              <form id="signUpForm" className="mx-auto text-center mt-5">
                <input
                  name="username"
                  onChange={this.handleChange}
                  placeholder={`${errorMessages[0] || 'Username'}`}
                  value={username}
                  className="mt-4"
                  required
                />
                <input
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  placeholder={`${errorMessages[1] || 'Password'}`}
                  value={password}
                  className="mt-4"
                  required
                />
                <input
                  name="confirmPassword"
                  type="password"
                  onChange={this.handleChange}
                  placeholder={`${errorMessages[2] || 'Confirm Password'}`}
                  value={confirmPassword}
                  className="mt-4"
                  required
                />
                <input
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  placeholder={`${errorMessages[3] || 'Email'}`}
                  value={email}
                  className="mt-4 mb-4"
                  required
                />
              </form>
              <div className="swirl-button" onClick={this.handleSubmit}>
                Sign Up
              </div>
            </div>
          </Col>
        </Row>
        <style jsx>
          {`
            #signUpForm {
             background-image: url('/images/blue-swirl.png');
             width: 307px;
             border-radius: 16px;
            }
            .swirl-button {
              background-image: url('/images/purp-swirl.png');
            }
            input {
              width: 240px;
              padding: 12px;
              border-radius: 7px;
              font-size: 1.2rem;
              border-style: none;
            }
            input[name="username"] {
              border: ${!!errorMessages[0] ? '2px solid red' : 'inherit'}
            }
            input[name="password"] {
              border: ${!!errorMessages[1] ? '2px solid red' : 'inherit'}
            }
            input[name="confirmPassword"] {
              border: ${!!errorMessages[2] ? '2px solid red' : 'inherit'}
            }
            input[name="email"] {
              border: ${!!errorMessages[3] ? '2px solid red' : 'inherit'}
            }
            `}
        </style>
      </Container>
    )
  }
}

export default withRouter(SignUp)
