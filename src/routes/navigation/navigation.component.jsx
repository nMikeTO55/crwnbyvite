import { useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {signOutUser} from '../../utils/firebase/firebase.utils'

import { 
  NavigationContainer, 
  LogoContainer, 
  NavLinks, 
  NavLink } 
from "./navigation.styles.js";

const Navigation = ()=>{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);
  return (
    <>
      <NavigationContainer >
        <LogoContainer to='/'>
          <img src={CrwnLogo} alt="SVG" />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {currentUser ? 
            (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) 
          :
            (<NavLink to='/auth'>SIGN IN</NavLink>)
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation;