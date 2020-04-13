import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import BigButton from '../components/big-button'
import axios from 'axios';
import { withRouter } from 'next/router'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async handleSubmit(e) {
    if(!this.state.username.length || !this.state.password.length) return;
    try {
      const {status} = await axios.post('/api/login', this.state)
      if(status === 200) {
        this.props.router.push('/home')
      }
    } catch (err) {
      const {data, status} = err.response;
      if(status === 401) {
        this.setState({username: '', password: '', errorMessage: data.message})
      }
    }
  }

  handleChange({target: { name, value} }) {
    this.setState({[name]: value, errorMessage: ''})
  }

  render() {
    const {errorMessage} = this.state;
    return (
      <Container>
        <Row>
          <Col xs='12'>
            <BigButton
              content='/images/logo.png'
              color='blue'
              link={'/'}
              image={true}
            />
            <div className="form-container">
              <form id="loginForm" className="mx-auto text-center mt-5">
                <input
                name="username"
                onChange={this.handleChange}
                placeholder={`${!!errorMessage.length ? 'Invalid Username or Password' : 'Username'}`}
                value={this.state.username}
                className="mt-4"
                />
                <input
                name="password"
                type="password"
                onChange={this.handleChange}
                placeholder={`${!!errorMessage.length ? 'Invalid Username or Password' : 'Password'}`}
                value={this.state.password}
                className="mt-4 mb-4"
                />
              </form>
              <div className="swirl-button" onClick={this.handleSubmit}>
                Login
              </div>
            </div>
          </Col>
        </Row>
        <style jsx>
          {`
            #loginForm {
             background-image: url('/images/purp-swirl.png');
             width: 307px;
             border-radius: 16px;
            }
            .swirl-button {
              background-image: url('/images/blue-swirl.png');
            }
            input {
              width: 240px;
              padding: 12px;
              border-radius: 7px;
              font-size: 1.2rem;
              border-style: none;
              border: ${!!errorMessage.length ? '2px solid red' : 'inherit'}
            }
            `}
        </style>
      </Container>
    )
  }
}

export default withRouter(Login)
