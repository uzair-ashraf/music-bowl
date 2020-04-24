import React, { Component } from 'react'
import Layout from '../components/layout'
import requireAuth from '../../services/require-auth'
import { FrontEndError } from '../../services/errorhandling'
import BigButton from '../components/big-button'
import { Row, Col } from 'reactstrap'
import SmallButton from '../components/small-button'
import Heading from '../components/heading'
import Router from 'next/router'
import { v4 as uuidv4 } from 'uuid'

export default class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userData: {},
      isLoading: true,
      errorMessage: ''
    }
    this.logout = this.logout.bind(this)
    this.triggerImageUpload = this.triggerImageUpload.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
    this.uploadRef = React.createRef()
  }

  static async getInitialProps(ctx) {
    requireAuth(ctx, typeof Window === 'undefined')
    return {}
  }

  async componentDidMount() {
    try {
      const response = await fetch('/api/users')
      const userData = await response.json()
      if (response.status !== 200) await Promise.reject(new FrontEndError(userData.message))
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

  async uploadImage(e) {
    this.setState({ errorMessage: '', isLoading: true })
    try {
      const imageData = new FormData()
      const fileName = uuidv4()
      const [imageToUpload] = e.target.files
      imageData.append('profile-image', imageToUpload, fileName + imageToUpload.name)
      const response = await fetch('/api/images', {
        method: 'POST',
        body: imageData
      })
      const imageResponse = await response.json()
      if (response.status.toString()[0] === '4') await Promise.reject(new FrontEndError(imageResponse.message))
      const { image } = imageResponse
      const userData = { ...this.state.userData, image }
      this.setState({ userData, errorMessage: '', isLoading: false })
    } catch (err) {
      console.error(err)
      if (err instanceof FrontEndError) {
        this.setState({ errorMessage: err.message, isLoading: false })
      } else {
        this.setState({ errorMessage: 'Unexpected error occurred', isLoading: false })
      }
    }
  }

  triggerImageUpload() {
    this.uploadRef.current.click()
  }

  render() {
    const { isLoading, userData, errorMessage } = this.state
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
              <div className="text-center text-danger">
                {errorMessage}
              </div>
              <Col xs='6'>
                <input
                  type="file"
                  ref={this.uploadRef}
                  onChange={this.uploadImage}
                  className="hidden"/>
                <SmallButton
                  icon={null}
                  heading='Update Photo'
                  color='blue'
                  onClick={this.triggerImageUpload}
                  disabled={!!isLoading}
                />
              </Col>
              <Col xs='6'>
                <SmallButton
                  icon={null}
                  heading={'Logout'}
                  color='purple'
                  onClick={this.logout}
                  disabled={!!isLoading}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    )
  }
}
