import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap'


export const Cart = () => {
    return (
        <div>
            <Container style={{ minHeight: "700px"}}>
                <div className="title">Shopping cart</div>
                <div className="removeAll ptr">
                    <FontAwesomeIcon className="deleteBtn" icon={faTrash} />
                    <span>Remove all</span>
                </div>
                <div className="d-flex">
                    <div className="buyList">
                        <div className="card">
                            <img src="" alt="img"/>
                            <div className="info">
                                <div className="name">Custom T-shirt</div>
                                <div className="SKU">SKU: SC_TSHIRT</div>
                                <FontAwesomeIcon className="deleteBtn ptr" icon={faTrash} />
                            </div>
                            <div className="price">$15.00</div>
                            <div className="quantity">
                                <div className="decBtn ptr">-</div>
                                <input type="text" name="quantities" id="number" value="1" />
                                <div className="incBtn ptr">+</div>
                            </div>
                            <div className="cost">$5.55</div>
                        </div>
                    </div>
                    <div className="costTable">
                        <div className="costTitle">ORDER SUMMARY</div>
                        <div className="subTotal">
                            <span>Sub-Total:</span>
                            <div className="cost">$3.01</div>
                        </div>
                        <div className="shipping">
                            <span>Shipping:(Ground)</span>
                            <div className="cost">$0.00</div>
                        </div>
                        <div className="tax">
                            <span>Tax:</span>
                            <div className="cost">$0.00</div>
                        </div>
                        <div className="total">
                            <span>Total:</span>
                            <div className="totalCost">$3.01</div>
                        </div>
                        <div className="checkOut ptr">Checkout</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
