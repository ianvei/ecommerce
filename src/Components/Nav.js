import React from 'react'
import CartContext from '../CartContext'
import { useContext } from 'react'
import Cart from './Cart'
import { Link } from 'react-router-dom';

function Nav() {
  const { state: {cart} } = useContext(CartContext)
  return (
    <nav>
        <div>{cart.length}</div>
        <Link to="gear">Gear</Link>
        <Link to="merch">Merch</Link>
        <Link to="about">About</Link>
        <Link to="cart">Cart</Link>
    </nav>
  )
}

export default Nav