import React, { Component } from 'react'
import Layout from '../components/layout'
import requireAuth from '../../services/require-auth'
import { FrontEndError } from '../../services/errorhandling'
import BigButton from '../components/big-button'
import { Row, Col } from 'reactstrap'
import SmallButton from '../components/small-button'
import Heading from '../components/heading'
import Router from 'next/router'

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {},
      isLoading: true
    }
    this.logout = this.logout.bind(this)
  }

  static async getInitialProps(ctx) {
    requireAuth(ctx, typeof Window === 'undefined')
    return {}
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/users')
      const userData = await response.json()
      if (response.status !== 200) Promise.reject(new FrontEndError(userData.message))
      this.setState({ userData, isLoading: false })
    } catch (err) {
      console.error(err)
    }
  }

  async logout() {
    try {
      const response = await fetch('/api/login', {
        method: 'DELETE'
      })
      if (response.status === 200) {
        Router.push('/')
      }
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { isLoading, userData } = this.state
    return (
      <Layout>
        <Row>
          <Col xs='12'>
            <Heading
              heading='User Account'
            />
            <BigButton
              content={userData.image || '/images/logo.png'}
              color='blue'
              link='/home'
              image={true}
              profileImage={true}
            />
            <Row className=" d-flex justify-content-center align-items-center mt-5 pt-5">
              <Col xs='6'>
                <SmallButton
                  icon={null}
                  heading='Update Photo'
                  color='blue'
                  onClick={null}
                  disabled={false}
                />
              </Col>
              <Col xs='6'>
                <SmallButton
                  icon={null}
                  heading={'Logout'}
                  color='purple'
                  onClick={this.logout}
                  disabled={false}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    )
  }
}
