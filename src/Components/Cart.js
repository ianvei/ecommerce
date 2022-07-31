import React from 'react'
import { useContext } from 'react'
import cartReducer from '../Reducers'
import CartContext from '../CartContext'

function Cart() {
  const {
    state: cart,
    dispatch
  } = useContext(CartContext)

  return (
    <div>Cart</div>
  )
}

export default Cart