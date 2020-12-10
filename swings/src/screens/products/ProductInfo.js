import React, { useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import "../../css/productInfo.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactStars from "react-rating-stars-component";

const sizeList = ['s', 'm', 'l', 'xl', 'xll'];
const hdList = [
    { type: "ÁO THUN", img: "//file.hstatic.net/200000201725/file/ao_thun_092f3b2909a54d498928f18b6e1ea020_master.jpg" },
    { type: "ÁO SƠ MI", img: "//file.hstatic.net/200000201725/file/ao_somi_53d4d8a813904c4ea0686f3112c2f571_master.jpg" },
    { type: "ÁO POLO", img: "//file.hstatic.net/200000201725/file/ao_polo_cc8a36ef7ded4d0a9cc080ad75f56556_master.jpg" },
    { type: "ÁO KHOÁC", img: "//file.hstatic.net/200000201725/file/ao_khoac_056e1d3c31dd46208f81c0f2698b7d3b_master.jpg" },
    { type: "ÁO NỈ - SWEATSHIRT", img: "//file.hstatic.net/200000201725/file/ao_ni-sweatshirt_7a2ac041da264380a6ca6642d6df3d45_master.jpg" },
    { type: "ÁO TANKTOP", img: "//file.hstatic.net/200000201725/file/ao_tanktop_10a2265e7a624738aee21eb2a0796ff7_master.jpg" },
    { type: "ÁO LEN - SWEATER", img: "//file.hstatic.net/200000201725/file/ao_len-sweater_4b18e3e960ec4f93a8472a274d220362_master.jpg" },
    { type: "ÁO HOODIE", img: "//file.hstatic.net/200000201725/file/ao_hoodie_c751bc01aba14e63b3f90f2e8729109b_master.jpg" },
    { type: "QUẦN SHORT", img: "//file.hstatic.net/200000201725/file/quan_short_42fe0b5e9a4745d5af9ff1137e64606a_master.jpg" },
    { type: "QUẦN TÂY", img: "//file.hstatic.net/200000201725/file/quan_tay_e4307d69ebb84c6fb309fefa1f3b0d3d_master.jpg" },
    { type: "QUẦN KAKI", img: "//file.hstatic.net/200000201725/file/quan_kaki_e19d5342af55404da78775c61d07cead_master.jpg" },
    { type: "QUẦN JEANS", img: "//file.hstatic.net/200000201725/file/quan_jean_2d06b93170cf48aeba5bbf3f37592a5a_master.jpg" },
    { type: "QUẦN JOGGER - QUẦN DÀI", img: "//file.hstatic.net/200000201725/file/quan_jogger_06eae128a000431496275e8c6ce709ea_master.jpg" },
]

export const ProductInfo = ({match}) => {
    console.log(match.params.productId)
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("s");
    const [img, setImg] = useState(hdList[0].img)
    const [star, setStar] = useState(4);

    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState(false);

    const changeSize = (e) => {
        document.getElementsByClassName("sd")[0].className = "";
        let target = e.target.nextSibling
        target.className += "sd";
        setSize(target.innerText.toLowerCase())
    }

    const update = () => {
        console.log(quantity + " " + size)
        setAlert(true)
    }

    const onChangeOption = (e) => {
        let target = hdList.find((item) => { return item.type === e.target.value })
        setImg(target.img)
    }

    const ratingChanged = (newRating) => {
        setStar(newRating)
    };

    return (
        <div>
            <Modal show={alert} onHide={() => {setAlert(false)}}>
                <Modal.Header closeButton>
                    <span>Sản phẩm đã được thêm vào giỏ</span>
                </Modal.Header>
            </Modal>
            <Modal className="modal-box" show={show} onHide={() => {setShow(false)}}>
                <Modal.Header closeButton>
                    <h2>HƯỚNG DẪN CHỌN SIZE</h2>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <select id="huong-dan-chon-size" onChange={(e) => { onChangeOption(e) }}>
                            {
                                hdList.map((item) =>
                                    <option>{item.type}</option>
                                )
                            }
                        </select>
                    </div>
                    <div>
                        <img className="hd_img" src={img} alt="HDSD"></img>
                    </div>
                </Modal.Body>
            </Modal>
            <Container className="productInfo">
                <Col md="7">
                    <Carousel>
                        <div>
                            <img alt="" src="http://product.hstatic.net/200000201725/product/_nik6857_3aaee08f035c41399c4792651fceac49_grande.jpg" />
                        </div>
                        <div>
                            <img alt="" src="http://product.hstatic.net/200000201725/product/_nik6846_3ca2e02df9484c528f6f465bb07081d8_grande.jpg" />
                        </div>
                    </Carousel>
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
                        {
                            sizeList.map((item, index) =>
                                <div className={"swatch-element " + item.toLowerCase()}>
                                    <input id={"swatch-0-" + item.toLowerCase()} className="variant-0" type="radio" name="option1" onClick={(e) => { changeSize(e) }}></input>
                                    <label className={index === 1 ? "sd" : ""} htmlFor={"swatch-0-" + item.toLowerCase()}>
                                        <span>{item.toUpperCase()}</span>
                                    </label>
                                </div>)
                        }
                    </Row>
                    <Row className="pro_row rating">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={32}
                            activeColor="#ffd700"
                            value={star}
                        />
                    </Row>
                    <Row className="pro_row">
                        <div className="hd" onClick={() => {setShow(true)}}>
                            <span>Hướng dẫn chọn size</span>
                        </div>
                    </Row>
                    <Row className="pro_row selector">
                        <div className="quantity_selector">
                            <input className="qty-btn" type="button" value="-" onClick={() => { setQuantity(quantity > 1 ? quantity - 1 : quantity) }} />
                            <input type="text" id="quantity" name="quantity" value={quantity} min="1" />
                            <input className="qty-btn" type="button" value="+" onClick={() => { setQuantity(quantity + 1) }} />
                        </div>
                        <div className="add_cart">
                            <button id="add_to_cart" type="button" onClick={update}>Thêm vào giỏ</button>
                        </div>
                    </Row>
                </Col>
            </Container>

        </div>
    )
}
