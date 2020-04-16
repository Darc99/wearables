import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems  } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, EmptyContainer, CartItemsButton, CartItemsContainer } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
           {
               cartItems.length ? (
               cartItems.map(cartItem => (
                   <CartItem key={cartItem.id} item={cartItem} />
               ))
             ) : (
               <EmptyContainer>Your cart is empty</EmptyContainer>
           )} 
        </CartItemsContainer>
        <CartItemsButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT
        </CartItemsButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({ 
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
