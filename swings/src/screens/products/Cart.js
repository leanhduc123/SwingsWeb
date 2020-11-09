import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap'
import "../../css/cart.css"

export const Cart = () => {
    return (
        <div>
            <Container style={{ minHeight: "700px"}}>
                <div class="title">Shopping cart</div>
                <div class="removeAll ptr">
                    <FontAwesomeIcon className="deleteBtn" icon={faTrash} />
                    <span>Remove all</span>
                </div>
                <div class="d-flex">
                    <div class="buyList">
                        <div class="card">
                            <img src="" alt="img"/>
                            <div class="info">
                                <div class="name">Custom T-shirt</div>
                                <div class="SKU">SKU: SC_TSHIRT</div>
                                <FontAwesomeIcon className="deleteBtn ptr" icon={faTrash} />
                            </div>
                            <div class="price">$15.00</div>
                            <div class="quantity">
                                <div class="decBtn ptr">-</div>
                                <input type="text" name="quantities" id="number" value="1" />
                                <div class="incBtn ptr">+</div>
                            </div>
                            <div class="cost">$5.55</div>
                        </div>
                    </div>
                    <div class="costTable">
                        <div class="costTitle">ORDER SUMMARY</div>
                        <div class="subTotal">
                            <span>Sub-Total:</span>
                            <div class="cost">$3.01</div>
                        </div>
                        <div class="shipping">
                            <span>Shipping:(Ground)</span>
                            <div class="cost">$0.00</div>
                        </div>
                        <div class="tax">
                            <span>Tax:</span>
                            <div class="cost">$0.00</div>
                        </div>
                        <div class="total">
                            <span>Total:</span>
                            <div class="totalCost">$3.01</div>
                        </div>
                        <div class="checkOut ptr">Checkout</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
