import React from 'react'
import CartContext from '../CartContext'
import { useContext } from 'react'
import Cart from './Cart'
import { Link } from 'react-router-dom';
import CartHover from './CartHover';
import logoImg from '../data/images/logo.png'

function Nav() {
  const { state: {cart} } = useContext(CartContext)
  return (
    <nav>
        <div className='nav-ls'>
          <img className="nav-logo" src={logoImg} alt="logo" />
          <Link to='/'><h1>pedalsupply</h1></Link>
        </div>
        
        <div className='nav-rs'>
          <Link to="gear">Gear</Link>
          <Link to="merch">Merch</Link>
          <Link to="about">About</Link>
          <div className={`cartHoverCont`}><Link to="cart">Cart</Link>
            <div className={`dropdown-content ${cart.length === 0 ? 'hidden':''}`}>
              <CartHover />
            </div>
          </div>
          <div>{cart.length}</div>
        </div>
        
    </nav>
  )
}

export default Nav