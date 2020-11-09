import React from 'react'
import { Navbar, NavDropdown, Carousel, Nav, Container } from 'react-bootstrap'
import { Card } from "../card/Card"
import style from "../../css/card.module.css"
import { Route, Switch } from 'react-router-dom'
import { Cart } from '../products/Cart'
import { ProductInfo } from '../products/ProductInfo'
import { ProductList } from '../products/ProductList'

const home = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                            alt="First slide"
                            style={{ height: 100 }}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100 h-20"
                            src="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                            alt="Third slide"
                            style={{ height: 100 }}
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-20"
                            src="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                            alt="Third slide"
                            style={{ height: 100 }}
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div class="m-0 p-0" style={{ height: 450, boxSizing: 'border-box' }}>

                <Container className="h-100" style={{ boxSizing: "border-box" }}>
                    <div class="font-weight-bold" className={style.header}>
                        <span>PC</span>
                    </div>
                    <div class="m-0 p-0 h-75 d-flex flex-row justify-content-between"
                        style={{ boxSizing: "border-box" }}>
                        <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                            header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                            header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                            header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                            header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    </div>
                </Container>
            </div>
            <div class="m-0 p-0" style={{ height: 450, boxSizing: 'border-box' }}>
                <div class="h-100">
                    <Container className="h-100">
                        <div class="font-weight-bold" className={style.header}>
                            <span>Laptop</span>
                        </div>
                        <div class="m-0 p-0 h-75 d-flex flex-row justify-content-between"
                            style={{ boxSizing: "border-box" }}>
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                    </Container>
                </div>
            </div>
            <div class="m-0 p-0" style={{ height: 450, boxSizing: 'border-box' }}>
                <div class="h-100">
                    <Container className="h-100">
                        <div class="font-weight-bold" className={style.header}>
                            <span>Mouse</span>
                        </div>
                        <div class="m-0 p-0 h-75 d-flex flex-row justify-content-between"
                            style={{ boxSizing: "border-box" }}>
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                    </Container>
                </div>
            </div>
            <div class="m-0 p-0" style={{ height: 450, boxSizing: 'border-box' }}>
                <div class="h-100">
                    <Container className="h-100">
                        <div class="font-weight-bold" className={style.header}>
                            <span>Screen</span>
                        </div>
                        <div class="m-0 p-0 h-75 d-flex flex-row justify-content-between">
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                            <Card imgSrc="https://imgsv.imaging.nikon.com/lineup/dslr/df/img/sample/img_02_l.jpg"
                                header="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}
export const Home = () => {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features" >Laptop,Máy Tính Bảng</Nav.Link>
                                <Nav.Link href="#pricing" >PC</Nav.Link>
                                <Nav.Link href="#pricing" >Thiết Bị Văn Phòng</Nav.Link>
                                <Nav.Link href="#pricing" >Màn Hình Máy Tính</Nav.Link>
                                <NavDropdown title="Link Kiện" id="collasible-nav-dropdown" >
                                    <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">MAINBOARD</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Ổ CỨNG HDD</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Ổ CỨNG SSD</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">RAM</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">VGA</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">PSU</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">CASE</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">ODD</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">CARD ÂM THANH</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Gaming Gear" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">CPU</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">BÀN PHÍM</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">GHẾ GAMING</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">CHUỘT</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">BÀN DI CHUỘT</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">BÀN CHƠI GAME</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">TAI NGHE GAMING</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">PHỤ KIỆN</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Switch>
                <Route path='/cart' component={Cart}/>
                <Route path='/info' component={ProductInfo}/>
                <Route path='/product' component={ProductList}/>
                <Route path='/' component={home}/>
            </Switch>
        </div>
    )
}

