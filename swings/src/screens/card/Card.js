import React from 'react'
import { Col } from 'react-bootstrap';
import style from '../../css/card.css'

export const Card = (props) => {
    const { product } = props;
    return (
        <Col md="3" className="item">
            <div>
                <img className="img2" src={product.img[1]} alt={product.name} />
                <img className="img1" src={product.img[0]} alt={product.name} />
            </div>
            <div className="namePrice">
                <a href="/" className="name">{product.name}</a>
                <div className="price">{product.price}</div>
            </div>
        </Col>
    )
}
