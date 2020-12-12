import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as Yup from "yup";
import "../../css/custom.css"


export const Custom = () => {
    return (
        <div style={{ paddingBottom: 50 }}>
            <div className="header-title">
                <h1>Thông tin địa chỉ</h1>
            </div>
            <Container>
                <Row>
                    <Col md={3} className="account-sidebar">
                        <h3>TÀI KHOẢN</h3>
                        <div className="account-content">
                            <div className="action-content">
                                <Link to="/account" className="link">
                                    <FontAwesomeIcon icon={faDotCircle} className="icon" />
                                    Thông tin tài khoản
                                </Link>
                                <Link to="/account" className="link">
                                    <FontAwesomeIcon icon={faDotCircle} className="icon" />
                                    Đăng xuất
                                </Link>
                            </div>
                            <div className="action-content"></div>
                        </div>
                    </Col>
                    <Col md={5}>
                    <Form>
                        <Form.Group controlId="fullName">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="text" placeholder="Nhập họ tên" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Nhập email" />
                        </Form.Group>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="text" placeholder="Nhập số điện thoại" />
                        </Form.Group>
                        <Form.Group controlId="address">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control type="text" placeholder="Nhập địa chỉ" />
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                            Cập nhật
                        </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
