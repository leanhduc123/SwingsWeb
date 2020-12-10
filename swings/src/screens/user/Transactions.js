import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../css/transactions.css"

export const Transactions = (props) => {
    return (
        <div style={{ paddingBottom: 50 }}>
            <div className="header-title">
                <h1>Chi tiết đơn hàng</h1>
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
                            <h3 className="title-detail">ĐƠN HÀNG: #123123</h3>
                            <h2 className="fullName">lê đức</h2>
                            <p>số điện thoại</p>
                            <p>địa chỉ</p>
                            <Link to="/account" className="custom_account">
                                Quay lại trang tài khoản
                            </Link>
                        </div>
                        <div className="customer-orders">
                            <div className="customer-table">
                                <p className="table-title">DANH SÁCH ĐƠN HÀNG MỚI NHẤT</p>
                                <div className="table-responsive">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th className=""></th>
                                                <th className="">Sản phẩm</th>
                                                <th className="text-center">Mã sản phẩm</th>
                                                <th className="text-right">Đơn giá</th>
                                                <th className="text-center">Số lượng</th>
                                                <th className="total text-right">Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="">
                                                    <Link to="/account" className="transactionId">
                                                        <img src="//product.hstatic.net/200000201725/product/_mg_4945_225231a84f4a4f8db19cbeab2bab16b6_small.jpg" />
                                                    </Link>
                                                </td>
                                                <td className="text-left">
                                                    <Link to="/account" className="transactionId">
                                                        <span>Quần Jogger Denim Pants black 1269</span>
                                                    </Link>
                                                    <span>X</span>
                                                </td>
                                                <td className="text-center">
                                                    <span>QJ0C1269Bc28</span>
                                                </td>
                                                <td className="text-right">
                                                    <span>580,000₫</span>
                                                </td>
                                                <td className="text-center">
                                                    <span>3</span>
                                                </td>
                                                <td className="text-right">
                                                    <span>1,740,000₫</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="">
                                                    <Link to="/account" className="transactionId">
                                                        <img src="//product.hstatic.net/200000201725/product/_mg_4945_225231a84f4a4f8db19cbeab2bab16b6_small.jpg" />
                                                    </Link>
                                                </td>
                                                <td className="text-left">
                                                    <Link to="/account" className="transactionId">
                                                        <span>Quần Jogger Denim Pants black 1269</span>
                                                    </Link>
                                                    <span>X</span>
                                                </td>
                                                <td className="text-center">
                                                    <span>QJ0C1269Bc28</span>
                                                </td>
                                                <td className="text-right">
                                                    <span>580,000₫</span>
                                                </td>
                                                <td className="text-center">
                                                    <span>3</span>
                                                </td>
                                                <td className="text-right">
                                                    <span>1,740,000₫</span>
                                                </td>
                                            </tr>
                                            <tr className="table-footer">
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className="text-right">
                                                    <span>Tổng tiền:</span>
                                                </td>
                                                <td className="text-right">
                                                    <span>1,740,000₫</span>
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
