import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../css/account.css"

export const Account = () => {
    return (
        <div style={{ paddingBottom: 50 }}>
            <div className="header-title">
                <h1>Tài khoản của bạn</h1>
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
                    <Col md={9}>
                        <div className="customer-sidebar">
                            <h3 className="title-detail">Thông tin tài khoản</h3>
                            <h2 className="fullName">lê đức</h2>
                            <p>username</p>
                            <p>email</p>
                            <p>số điện thoại</p>
                            <p>địa chỉ</p>
                            <Link to="account/custom" className="custom_account">
                                Chỉnh sửa thông tin
                            </Link>
                        </div>
                        <div className="customer-orders">
                            <div className="customer-table">
                                <p className="table-title">DANH SÁCH ĐƠN HÀNG MỚI NHẤT</p>
                                <div className="table-responsive">
                                    <Table className="table">
                                        <thead>
                                            <tr>
                                                <th className="order_id text-center">Mã đơn hàng</th>
                                                <th className="date text-center">Ngày đặt</th>
                                                <th className="total text-right">Thành tiền</th>
                                                <th className="status text-center">Trạng thái đơn hàng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="order_id text-center">
                                                    <Link to="/account/orders/123123" className="transactionId">
                                                        #123123
                                                    </Link>
                                                </td>
                                                <td className="date text-center">
                                                    <span>10/11/2020</span>
                                                </td>
                                                <td className="total text-right">
                                                    <span>1,700,500d</span>
                                                </td>
                                                <td className="status text-center">
                                                    <span>Chua xu ly</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="order_id text-center">
                                                    <Link to="/account" className="transactionId">
                                                        #123123
                                                    </Link>
                                                </td>
                                                <td className="date text-center">
                                                    <span>10/11/2020</span>
                                                </td>
                                                <td className="total text-right">
                                                    <span>1,700,500d</span>
                                                </td>
                                                <td className="status text-center">
                                                    <span>Chua xu ly</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
