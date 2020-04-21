import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function Layout(props) {
  return (
    <Container className="inner-page vh-100">
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs='10' className="inner-page-card overflow-auto">
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}
