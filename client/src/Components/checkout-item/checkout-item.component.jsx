/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/actions/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({
  cartItem, dispatchClearItemFromCart, dispatchAddItem, dispatchRemoveItem,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatchRemoveItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatchAddItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">
        $
        {price}
      </span>
      <div className="remove-button" onClick={() => dispatchClearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchClearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  dispatchAddItem: (item) => dispatch(addItem(item)),
  dispatchRemoveItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
