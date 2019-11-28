import React from "react";
import "./checkout-items.styles.scss";

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl}></img>
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <span className="remove-button">&#10005;</span>
  </div>
);

export default CheckoutItem;
