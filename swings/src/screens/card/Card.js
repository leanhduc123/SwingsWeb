import React from 'react'
import { Col } from 'react-bootstrap';

import "../../css/card.css"

export const Card = (props) => {
    const { product } = props;
    return (
        <Col md="3" className="item">
            <div>
                <div className={product.discount === 0 ? "no" : "product-sale"}>
                    <span>{"-" + product.discount + "%"}</span>
                </div>
                <a className="name" to={`/collections/${product.productId}`}>
                    <img className="img2" src={product.img[1]} alt={product.name} />
                    <img className="img1" src={product.img[0]} alt={product.name} />
                </a>
            </div>
            <div className="namePrice">
                <a className="name" to={`/collections/${product.productId}`}>{product.name}</a>
                <div className="price">
                    <span className={(product.discount > 0) ? "discount" : "no discount"}>
                        {(product.price*product.discount/100).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '₫'}
                    </span>
                    <span className="real">
                        {(product.discount === 0) 
                         ? (product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '₫')
                         : <del>{product.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '₫'}</del>} 
                    </span>
                </div>
            </div>
        </Col>
    )
}
