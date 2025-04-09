import {useContext} from 'react';

import ShoppingSvg from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount
} from './cart-icon.styles.js';

const CartIcon = () => {

  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={ShoppingSvg} alt="SVG" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;