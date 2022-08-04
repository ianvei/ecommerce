import React from 'react'
import CartContext from '../CartContext'
import { useContext, useState } from 'react'
import Cart from './Cart'
import { Link } from 'react-router-dom';
import CartHover from './CartHover';
import logoImg from '../data/images/logo.png'
import hamburgerImg from '../data/images/hamburger.png'
import cancelImg from '../data/images/cancel.png'

function Nav() {
  const { state: {cart} } = useContext(CartContext)
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => prevMenu = !prevMenu)
  }
  return (
    <>
    <nav>
        <div className='nav-ls'>
        <Link  className='nav-ls' to='/'><img className="nav-logo" src={logoImg} alt="logo" />
          <h1>pedalsupply</h1></Link>
        </div>
        
        <img className={`hamburger-img ${menu? 'cancel-img' : ''}`} src={menu? cancelImg : hamburgerImg} alt="hamburgerMenu" onClick={toggleMenu}/>
        <div className='nav-rs'>
          
          <Link to="gear">Gear</Link>
          <Link to="merch">Merch</Link>
          <Link to="about">About</Link>
          <div className={`cartHoverCont`}><Link to="cart">Cart</Link>
            <div className={`dropdown-content ${cart.length === 0 ? 'hidden':''}`}>
              <CartHover />
            </div>
          </div>
          {/* <div>{cart.length}</div> */}
        </div>
        
    </nav>
    <div className={`hb-content ${menu? 'open' : 'closed'}`}>
      <Link to="gear">Gear</Link>
      <Link to="merch">Merch</Link>
      <Link to="about">About</Link>
      <Link to="cart">Cart</Link>
    </div>
    </>
  )
}

export default Nav