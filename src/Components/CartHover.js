import React from 'react'
import { useContext, useState } from 'react'
import CartContext from '../CartContext'
import { Link } from 'react-router-dom';


function CartHover() {
    const {
        state: {cart},
        dispatch
      } = useContext(CartContext)
    
      return (
        <>
          {cart.map((item) => {
            console.log(cart.length)
           return(
            <div className={`nav-cart-card`} key={item.id}>
              <img src={item.images.staticImg} alt={item.name} className="cart-hover-img"/>
              <h2>{item.name}</h2>
              <p>${item.price}</p>
              {item.size && <p>{item.size}</p>}
              <p>Quantity: {item.qty}</p>
              <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}>delete</button>
            </div>
           )
          })}
          <button><Link to="cart">View Cart</Link></button>
        </>
      )
}

export default CartHover