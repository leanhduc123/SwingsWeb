import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card } from "../card/Card"
import '../../css/nav.css'
import { Link, Route, Switch } from 'react-router-dom'
import { Cart } from '../products/Cart'
import { ProductInfo } from '../products/ProductInfo'
import { ProductList } from '../products/ProductList'
import { Login } from '../auth/Login'
import { faShoppingCart, faUserCircle, faSearch, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Register } from '../auth/Register'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropDownNav } from './DropDownNav'
import { Comment } from '../Comments/Comment'
import { Account } from '../user/Account'
import { Transactions } from '../user/Transactions'
import { Custom } from '../user/Custom'
import { Search } from '../products/Search'

const product = [{
    name: "Áo khoác",
    productId: "123123123",
    price: 650000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    discount: 50,
    description: "day la mot san pham tot co kha nngsdc dcs dsc sdf sdfs sxas ewwe sdcsd asda qweq asa",
    rating: [
        {username: "duc", score: 3},
        {username: "linh", score: 2},
        {username: "hoang", score: 1},
        {username: "kien", score: 5},
        {username: "thai", score: 3},
    ]
}, {
    name: "Áo khoác",
    productId: "123123123",
    price: 650000,
    img: [
        "http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg",
        "http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg"
    ],
    size: ["M", "L", "XL", "XLL"],
    discount: 0,
    description: "day la mot san pham tot co kha nngsdc dcs dsc sdf sdfs sxas ewwe sdcsd asda qweq asa",
    rating: [
        {username: "duc", score: 3},
        {username: "linh", score: 2},
        {username: "hoang", score: 1},
        {username: "kien", score: 5},
        {username: "thai", score: 3},
    ]
}]

const home = () => {
    return (
        <div>
            <Row>
                <img className="carosel" src="http://theme.hstatic.net/200000201725/1000627199/14/slideshow_1.png?v=301" alt="Thời trang nam" />
            </Row>

            <Row className="titl">
                <a href="/collections/new-arrival">NEW ARRIVAL</a>
            </Row>

            <Container>
                <Row>
                    <Card product={product[1]} />
                    <Card product={product[1]} />
                    <Card product={product[1]} />
                    <Card product={product[1]} />
                    <Card product={product[1]} />
                    <Card product={product[1]} />
                    <Card product={product[1]} />
                    <Card product={product[1]} />
                </Row>
            </Container>

            <Row className="titl">
                <a href="/collections/sale-50">SALE UP TO 50%</a>
            </Row>

            <Container>
                <Row>
                <Card product={product[0]} />
                    <Card product={product[0]} />
                    <Card product={product[0]} />
                    <Card product={product[0]} />
                    <Card product={product[0]} />
                    <Card product={product[0]} />
                    <Card product={product[0]} />
                    <Card product={product[0]} />
                </Row>
            </Container>
        </div>
    )
}

export const Home = () => {
    const linkList =
        [{ type: "SALE OFF 50%", link: "/collections/sale-50" },
        { type: "ÁO", link: "/collections/ao" },
        { type: "ÁO SƠ MI", link: "/collections/ao-so-mi" },
        { type: "ÁO THUN", link: "/collections/ao-thun" },
        { type: "ÁO POLO", link: "/collections/ao-polo" },
        { type: "ÁO VEST", link: "/collections/ao-vest" },
        { type: "QUẦN", link: "/collections/quan/" },
        { type: "QUẦN JEANS", link: "/collections/quan-jeans" },
        { type: "QUẦN DÀI", link: "/collections/quan-dai" },
        { type: "QUẦN TÂY", link: "/collections/quan-tay" },
        { type: "QUẦN SHORT", link: "/collections/quan-short" },
        { type: "QUẦN KAKI", link: "/collections/quan-kaki" },
        { type: "BALO-TÚI XÁCH", link: "/collections/balo-tui-xach" },
        { type: "GIÀY DÉP", link: "/collections/giay-dep" },
        { type: "GIẦY DA", link: "/collections/giay-da" },
        { type: "PHỤ KIỆN KHÁC", link: "/collections/phu-kien" },
        { type: "UNDERWEAR", link: "/collections/underwear" },
        { type: "VỚ", link: "/collections/vo" },
        { type: "THẮT LƯNG", link: "/collections/that-lung" },
        { type: "VÍ", link: "/collections/vi" },
        { type: "ÁO KHOÁC", link: "/collections/ao-khoac" },
        { type: "ÁO KHOÁC BÒ", link: "/collections/ao-khoac-bo" },
        { type: "ÁO NỈ", link: "/collections/ao-ni" },
        { type: "ÁO HOODIE", link: "/collections/ao-hoodie" },
        { type: "ÁO KHOÁC DA", link: "/collections/ao-khoac-da" }
        ];
    const list = [{
        type: "SẢN PHẨM",
        link: "/",
        sublist: [
            { type: "SALE OFF 50%", link: "/collections/sale-50" },
            {
                type: "ÁO", link: "/collections/ao", sublist: [
                    { type: "ÁO SƠ MI", link: "/collections/ao-so-mi" },
                    { type: "ÁO THUN", link: "/collections/ao-thun" },
                    { type: "ÁO POLO", link: "/collections/ao-polo" },
                    { type: "ÁO VEST", link: "/collections/ao-vest" },
                ]
            },
            {
                type: "QUẦN", link: "/collections/quan", sublist: [
                    { type: "QUẦN JEANS", link: "/collections/quan-jeans" },
                    { type: "QUẦN DÀI", link: "/collections/quan-dai" },
                    { type: "QUẦN TÂY", link: "/collections/quan-tay" },
                    { type: "QUẦN SHORT", link: "/collections/quan-short" },
                    { type: "QUẦN KAKI", link: "/collections/quan-kaki" },
                ]
            },
            { type: "BALO-TÚI XÁCH", link: "/collections/balo-tui-xach" },
            {
                type: "GIÀY DÉP", link: "/collections/giay-dep", sublist: [
                    { type: "GIẦY DA", link: "/collections/giay-da" }
                ]
            },
            {
                type: "PHỤ KIỆN KHÁC", link: "/collections/phu-kien", sublist: [
                    { type: "UNDERWEAR", link: "/collections/underwear" },
                    { type: "VỚ", link: "/collections/vo" },
                    { type: "THẮT LƯNG", link: "/collections/that-lung" },
                    { type: "VÍ", link: "/collections/vi" }
                ]
            },
        ]
    }, {
        type: "SP MÙA ĐÔNG",
        link: "/",
        sublist: [
            { type: "ÁO KHOÁC", link: "/collections/ao-khoac" },
            { type: "ÁO KHOÁC BÒ", link: "/collections/ao-khoac-bo" },
            { type: "ÁO NỈ", link: "/collections/ao-ni" },
            { type: "ÁO HOODIE", link: "/collections/ao-hoodie" },
            { type: "ÁO KHOÁC DA", link: "/collections/ao-khoac-da" },
        ]
    }, {
        type: "SALE UPTO 50%",
        link: "/collections/sale-50"
    }, {
        type: "BÌNH LUẬN",
        link: "/comment"
    }]

    return (
        <div>
            <div className="navBarMain">
                <Container>
                    <Row className="align-items-center">
                        <Col lg='3' className="brand">
                            <a href="/">
                                <img src="https://image.freepik.com/free-vector/raven-esport-gaming-mascot-logo-template_20684-157.jpg" alt="swings-logo"/>
                                <span>SWINGS</span>
                            </a>
                        </Col>
                        <Col lg='7' className="searchBar">
                            <form className="search-box" action="/search">
                                <input type="text" placeholder="Nhập tên sản phẩm.." name="search" />
                                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                            </form>
                        </Col>
                        <Col lg='2' className="icon-box">
                            <Link to="/cart" className="icon">
                                <FontAwesomeIcon  icon={faShoppingCart}/>
                            </Link>
                            <Link to="/login" className="icon">
                                <FontAwesomeIcon  icon={faUserCircle} />
                            </Link>
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

            <Switch className="main_body">
                <Route path='/cart' component={Cart} />
                <Route path='/info' component={ProductInfo} />
                <Route path='/comments' component={Comment} />
                {
                    linkList.map(item => {
                        return <Route path={item.link} render={() => (
                            <ProductList type={item.type} link={item.link} />
                        )} />
                    })
                }
                <Route path="/collections/:productId" name="product" component={ProductInfo}/>
                <Route path="/search" component={Search} />
                <Route path="/login" component={Login} />
                <Route path="/comment" component={Comment} />
                <Route path="/register" exact component={Register} />
                <Route path="/account/orders/:id" component={Transactions}/>
                <Route path="/account" component={Account} />
                <Route path="/custom" component={Custom} />
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


