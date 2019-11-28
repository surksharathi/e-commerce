import React from "react";
import "./checkout-items.styles.scss";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
// import { dispatch } from "rxjs/internal/observable/range";

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
