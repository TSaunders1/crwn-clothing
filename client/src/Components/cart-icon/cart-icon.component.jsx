/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/actions/cart.actions';
import { selectCartItemsCount } from '../../redux/selectors/cart.selectors';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ dispatchToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={dispatchToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{ itemCount }</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  dispatchToggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
