import React, { useInsertionEffect } from 'react'
import CartContext from '../CartContext'
import { useContext, useEffect, useState } from 'react'

function MerchCard( {itemData} ) {
  const { 
        state: { cart }, 
        dispatch,
    } = useContext(CartContext);

const [size, setSize] = useState('');
//   useEffect(() => {
//     console.log(item)
//   })

  const { name, images, description, price } = itemData;
  return (
    <div className='item-card'>
        <h3>{name}</h3>
        <img src={images.staticImg}alt={name} className="tempimg"/>
        <h4>{description}</h4>
        <p>{price}</p>
        <label htmlFor="size">Select a size</label>
        <select name="size" 
        // defaultValue={
        //     cart.some((item) => itemData.id === item.id? item.size: 'S')
        // } 
        id="" onChange={
        //     (e) => dispatch({
        //     type: 'CHANGE_SIZE',
        //     payload: {size: e.target.value, item:itemData}
        // })
        (e) => setSize(e.target.value)
        }>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
        </select>
        {cart.some((item) => itemData.id === item.id) ? 
            <button onClick={() => dispatch({
                type: 'REMOVE_FROM_CART',
                payload: itemData
            })}>Remove from cart</button> 
            :
            <button onClick={() => {dispatch({type: 'ADD_TO_CART',payload: itemData}); dispatch({type:'CHANGE_SIZE', payload: {size: size, item: itemData}}) }}>Add to cart</button>
        }
        
    </div>
  )
}

export default MerchCard