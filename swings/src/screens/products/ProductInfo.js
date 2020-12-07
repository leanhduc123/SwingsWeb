import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../../css/productInfo.css"

export const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);

    const changeSize = (e) => {
        document.getElementsByClassName("sd")[0].className = "";
        e.target.nextSibling.className = "sd";
    }

    return (
        <div>
            <Container className="productInfo">
                <Col md="7">
                    <img src="http://product.hstatic.net/200000201725/product/_w1a9116_1ad6f168250a4c5baf2e03ff2b126e31_master.jpg"
                        alt="product-img" className="mainImg" />
                </Col>
                <Col md="5">
                    <Row className="pro_row">
                        <h1>Name</h1>
                        <span id="id_prod">sdcsdckka</span>
                    </Row>
                    <Row className="pro_row price">
                        <span id="price">650.000d</span>
                    </Row>
                    <Row className="pro_row size">
                        <div className="swatch-element s">
                            <input id="swatch-0-s" className="variant-0" type="radio" name="option1" checked="" onClick={(e) => {changeSize(e)}}></input>
                            <label class="sd" for="swatch-0-s">
                                <span>S</span>
                            </label>
                        </div>
                        <div className="swatch-element m">
                            <input id="swatch-0-m" className="variant-1" type="radio" name="option1" checked="" onClick={(e) => {changeSize(e)}}></input>
                            <label class="" for="swatch-0-s">
                                <span>M</span>
                            </label>
                        </div>
                        <div className="swatch-element l">
                            <input id="swatch-0-l" className="variant-0" type="radio" name="option1" checked="" onClick={(e) => {changeSize(e)}}></input>
                            <label class="" for="swatch-0-s">
                                <span>L</span>
                            </label>
                        </div>
                        <div className="swatch-element xl">
                            <input id="swatch-0-xl" className="variant-0" type="radio" name="option1" checked="" onClick={(e) => {changeSize(e)}}></input>
                            <label class="" for="swatch-0-s">
                                <span>XL</span>
                            </label>
                        </div>
                        <div className="swatch-element xxl">
                            <input id="swatch-0-s" className="variant-0" type="radio" name="option1" checked="" onClick={(e) => {changeSize(e)}}></input>
                            <label class="" for="swatch-0-s">
                                <span>XXL</span>
                            </label>
                        </div>
                        
                    </Row>
                    <Row className="pro_row rating">
                        <h1>This is rating</h1>
                    </Row>
                    <Row className="pro_row">
                        <div className="hd">
                            <span>Huong dan chon size</span>
                        </div>
                    </Row>
                    <Row className="pro_row selector">
                        <div className="quantity_selector">
                            <input className="qty-btn" type="button" value="-" onClick={() => {setQuantity(quantity > 1 ? quantity-1 : quantity)}}/>
                            <input type="text" id="quantity" name="quantity" value={quantity} min="1" />
                            <input className="qty-btn" type="button" value="+" onClick={() => {setQuantity(quantity+1)}}/>
                        </div>
                        <div className="add_cart">
                            <button id="add_to_cart" type="button">Thêm vào giỏ</button>
                        </div>
                    </Row>
                </Col>
            </Container>
        </div>
    )
}
