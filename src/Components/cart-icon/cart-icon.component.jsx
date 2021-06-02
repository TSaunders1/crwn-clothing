/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/actions/cart.actions';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ dispatchToggleCartHidden }) => (
  <div className="cart-icon" onClick={dispatchToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  dispatchToggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
