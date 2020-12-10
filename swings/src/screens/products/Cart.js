import React, { useState } from 'react';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap'
import "../../css/cart.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
    const [quantity, setQuantity] = useState(1);
    const change = () => {
        setQuantity(quantity + 1)
        console.log(quantity)
    }
    return (
        <div className="cart-item">
            <div className="product_img">
                <Link to="#">
                    <img src="http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg" alt="product_img" />
                </Link>
            </div>
            <div className="content-item">
                <h3>
                    <Link to="#" className="name">
                        Ao da
                    </Link>
                </h3>
                <span className="price-item">125.000d</span>
                <span className="size">Size: X</span>
                <div className="quantity_selector">
                    <input className="qty-btn" type="button" value="-" onClick={() => { setQuantity(quantity > 1 ? quantity - 1 : quantity) }} />
                    <input type="text" id="quantity" name="quantity" value={quantity} min="1" />
                    <input className="qty-btn" type="button" value="+" onClick={() => { setQuantity(quantity + 1) }} />
                </div>
            </div>
            <p className="price-items">
                <span>250.000d</span>
            </p>
            <Link to="/cart" onClick={change} className="del">
                <img src="//theme.hstatic.net/200000201725/1000627199/14/ic_close.png?v=372" />
            </Link>
        </div>
    )
}

export const Cart = () => {
    const [show, setShow] = useState(false);
    return (
        <Container>
            <Modal className="modal_box" show={show} onHide={() => { setShow(false) }}>
                <Modal.Header closeButton>
                    <h3>Thông tin đơn hàng</h3>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="userName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="fullName">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control type="text" placeholder="Nhập họ tên người mua" />
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
                            Gửi đơn hàng
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
            <Row className="wrap-heading">
                <div className="heading-page">
                    <h3>Giỏ hàng của bạn</h3>
                    <p>Bạn có 13 sản phẩm trong giỏ hàng</p>
                </div>
            </Row>
            <Row className="wrap-cart">
                <Col md={8} className="table-cart">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </Col>
                <Col md={4}>
                    <div className="sidebox-order">
                        <div className="sidebox-inner">
                            <div className="sidebox-title">
                                <h3>Thông tin đơn hàng</h3>
                            </div>
                            <div className="sidebox-total">
                                <p>Tổng tiền:<span>150.000d</span></p>
                            </div>
                            <div className="sidebox-text">
                                <p>Phí vận chuyển sẽ được thông báo sau.</p>
                            </div>
                            <div className="sidebox-action">
                                <button className="submit-items" onClick={() => { setShow(true) }}>Thanh toán</button>
                                <p>
                                    <Link to="/" className="returnBtn">
                                        <FontAwesomeIcon icon={faStore} className="icon" />
                                        Tiếp tục mua hàng
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
