/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  HeaderContainer, LogoContainer, OptionsContainer, OptionLink,
} from './header.styles';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/selectors/cart.selectors';
import { selectCurrentUser } from '../../redux/selectors/user.selector';
import { signOutStart } from '../../redux/actions/user.actions';

import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden, dispatchSignOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {
        currentUser
          ? <OptionLink as="div" onClick={dispatchSignOutStart}>SIGN OUT</OptionLink>
          : <OptionLink to="/signin">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSignOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
