import React from 'react'
import { Navbar, NavDropdown, Carousel, Nav, Container, Row, Col } from 'react-bootstrap'
import { Card } from "../card/Card"
import '../../css/nav.css'
import { Route, Switch } from 'react-router-dom'
import { Cart } from '../products/Cart'
import { ProductInfo } from '../products/ProductInfo'
import { ProductList } from '../products/ProductList'
import { Login } from '../auth/Login'
import { faShoppingCart, faUserCircle, faSearch, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Register } from '../auth/Register'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropDownNav } from './DropDownNav'

const product = {
    name: "Áo khoác",
    price: "650.000đ",
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ]
}

const home = () => {
    return (
        <div>
            <Row>
                <img src="http://theme.hstatic.net/200000201725/1000627199/14/slideshow_1.png?v=301" alt="Thời trang nam" />
            </Row>

            <Row className="titl">
                <a href="/">NEW ARRIVAL</a>
            </Row>

            <Container>
                <Row>
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                </Row>
            </Container>

            <Row className="titl">
                <a href="/">SALE UP TO 50%</a>
            </Row>

            <Container>
                <Row>
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                    <Card product={product} />
                </Row>
            </Container>
        </div>
    )
}

export const Home = () => {
    const list = [{
        type: "SẢN PHẨM",
        link: "/",
        sublist: [
            { type: "SALE OFF 50%", link: "/" },
            {
                type: "ÁO", link: "/", sublist: [
                    { type: "ÁO SƠ MI", link: "/" },
                    { type: "ÁO THUN", link: "/" },
                    { type: "ÁO POLO", link: "/" },
                    { type: "ÁO VEST", link: "/" },
                ]
            },
            {
                type: "QUẦN", link: "/", sublist: [
                    { type: "QUẦN JEANS", link: "/" },
                    { type: "QUẦN DÀI", link: "/" },
                    { type: "QUẦN TÂY", link: "/" },
                    { type: "QUẦN SHORT", link: "/" },
                    { type: "QUẦN KAKI", link: "/" },
                ]
            },
            { type: "BALO-TÚI XÁCH", link: "/" },
            {
                type: "GIÀY DÉP", link: "/", sublist: [
                    { type: "GIẦY DA", link: "/" }
                ]
            },
            {
                type: "PHỤ KIỆN KHÁC", link: "/", sublist: [
                    { type: "UNDERWEAR", link: "/" },
                    { type: "VỚ", link: "/" },
                    { type: "THẮT LƯNG", link: "/" },
                    { type: "VÍ", link: "/" }
                ]
            },
        ]
    }, {
        type: "SP MÙA ĐÔNG",
        link: "/",
        sublist: [
            { type: "ÁO KHOÁC", link: "/" },
            { type: "ÁO KHOÁC BÒ", link: "/" },
            { type: "ÁO NỈ", link: "/" },
            { type: "ÁO HOODIE", link: "/" },
            { type: "ÁO KHOÁC DA", link: "/" },
        ]
    }, {
        type: "SALE UPTO 50%",
        link: "/"
    }, {
        type: "BÌNH LUẬN",
        link: "/"
    }]

    return (
        <div>
            <div class="navBarMain">
                <Container>
                    <Row className="align-items-center">
                        <Col lg='3' className="brand">SWINGS</Col>
                        <Col lg='7' className="searchBar">
                            <form class="search-box" action="action_page.php">
                                <input type="text" placeholder="Nhập tên mã hoặc tên sản phẩm.." name="search" />
                                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                            </form>
                        </Col>
                        <Col lg='2' className="icon-box">
                            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                            <FontAwesomeIcon className="icon" icon={faUserCircle} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row className="dropDownNav">
                <Container className="p-0 d-flex">
                    {
                        list.map(item =>
                            <Col lg="2" className="type p-0">
                                <DropDownNav list={item} />
                            </Col>
                        )
                    }
                </Container>
            </Row>

            <Switch>
                <Route path='/cart' component={Cart} />
                <Route path='/info' component={ProductInfo} />
                <Route path='/product' component={ProductList} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path='/' component={home} />
            </Switch>

            <Row className="footer-main">
                <Container className="footer">
                    <Col md="3" className="footer-1">
                        <h5>SWINGS</h5>
                        <div className="para">
                            <p>Đội ngũ Swings luôn coi trọng lợi ích của khách hàng lên hàng đầu, chỉn chu từng bước để mang tới những sản phẩm hoàn hảo nhất từ “đầu tới cuối”.</p>
                        </div>
                        <div className="logo-footer">
                            <img src="https://file.hstatic.net/1000300454/file/logo_bct_019590229b4c4dfda690236b67f7aff4.png" alt="logo-footer" />
                        </div>
                    </Col>
                    <Col md="3" className="footer-2">
                        <h5>KẾT NỐI VỚI CHÚNG TÔI</h5>
                        <div className="brand-icon">
                            <FontAwesomeIcon className="icon-footer" icon={faFacebookSquare} />
                            <FontAwesomeIcon className="icon-footer" icon={faInstagramSquare} />
                            <FontAwesomeIcon className="icon-footer" icon={faTwitterSquare} />
                            <FontAwesomeIcon className="icon-footer" icon={faYoutubeSquare} />
                        </div>
                    </Col>
                    <Col md="3" className="footer-3">
                        <h5>TƯ VẤN BÁN HÀNG (9:30 - 21:30)</h5>
                        <div className="phoneNumber">
                            <FontAwesomeIcon className="phone-icon" icon={faPhoneSquare} />
                            <span>0398 050237</span>
                        </div>
                        <div className="para">
                            <p>Tất cả các ngày trong tuần</p>
                        </div>
                    </Col>
                    <Col md="3" className="footer-4">
                        <h5>CHĂM SÓC KHÁCH HÀNG (9:30 - 21:00)</h5>
                        <div className="phoneNumber">
                            <FontAwesomeIcon className="phone-icon" icon={faPhoneSquare} />
                            <span>0398 050237</span>
                        </div>
                        <div className="para">
                            <p>Tất cả các ngày trong tuần</p>
                        </div>
                    </Col>
                </Container>
            </Row>
        </div>
    )
}


