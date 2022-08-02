import React from 'react'
import { useContext, useState } from 'react'
import cartReducer from '../Reducers'
import CartContext from '../CartContext'
import { Link } from 'react-router-dom'

function Cart() {
  const {
    state: {cart},
    dispatch
  } = useContext(CartContext)

  return (
    <div className='cartBody'>
      {cart.map((item) => {
       console.log(cart)
       return(
        <div className='cart-card' key={item.id}>
          <img src={item.images.staticImg} alt={item.name} className="checkout-img"/>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          {item.size && <p>{item.size}</p>}
          <p>Quantity: <button onClick={() => dispatch({ type: 'DECREMENT_QTY', payload: item })}>-</button>{item.qty}<button onClick={() => dispatch({ type: 'INCREMENT_QTY', payload: item })}>+</button></p>
          <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>delete</button>
        </div>
       )
      })}
      <div className='checkout'>
         <Link to='/checkout'><button>total price: {cart.reduce((total, item)=>total+(item.price*item.qty), 0)}
        </button></Link>
      </div>
    </div>
  )
}

export default Cart