import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../css/card.css"

export const Card = (props) => {
    const { product } = props;
    return (
        <Col md="3" className="item">
            <div>
                <img href={product.link} className="img2" src={product.img[1]} alt={product.name} />
                <img href={product.link} className="img1" src={product.img[0]} alt={product.name} />
            </div>
            <div className="namePrice">
                <Link className="name" to={`/collections/${product.productId}`}>{product.name}</Link>
                <div className="price">{product.price}.000đ</div>
            </div>
        </Col>
    )
}
