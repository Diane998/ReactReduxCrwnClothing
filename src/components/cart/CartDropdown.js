import React from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import './CartDropdown.scss';
import CartItem from './CartItem';
import { selectCartItems } from '../../redux/cartSelectors';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = state => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
