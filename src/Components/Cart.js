import React from 'react'
import { useContext, useState } from 'react'
import cartReducer from '../Reducers'
import CartContext from '../CartContext'
import { Link } from 'react-router-dom'
import deleteImg from '../data/images/delete.png'
import logoImg from '../data/images/logo.png'

function Cart() {
  const {
    state: {cart},
    dispatch
  } = useContext(CartContext)

  return (
    <div className='cartBody'>
      <div className='cart-content'>
        <div className='cart-header'>
          <div></div>
          <p>NAME</p>
          <p>PRICE</p>
          <p>SIZE</p>
          <p>QUANTITY</p>
          <div></div>
        </div>
        <hr />
        {cart.map((item) => {
        console.log(cart)
        return(
          <div className='cart-card' key={item.id}>
            <img src={item.images.staticImg} alt={item.name} className="checkout-img"/>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            {item.size && <p>{item.size}</p>}
            {!item.size && <div></div>}
            <p className='quantity-button'><button onClick={() => dispatch({ type: 'DECREMENT_QTY', payload: item })}>-</button>{item.qty}<button onClick={() => dispatch({ type: 'INCREMENT_QTY', payload: item })}>+</button></p>
            <img className='delete-img' src={deleteImg} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })} alt='delete'></img>
          </div>
        )
        })}
      </div>
      
      <div className='checkout'>
        <div className='checkout-info'>
          <h2>Thank you for shopping at pedalsupply!</h2>
          <p>If you have any questions, please contact support@pedalsupply.com</p>
        </div>
        <img className="checkout-logo"src={logoImg} alt="pedal supply logo" />
         <Link to='/checkout'><button className='checkout-button'>CHECKOUT: ${cart.reduce((total, item)=>total+(item.price*item.qty), 0)}
        </button></Link>
      </div>
    </div>
  )
}

export default Cart