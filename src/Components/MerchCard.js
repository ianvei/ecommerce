import React, { useInsertionEffect } from 'react'
import CartContext from '../CartContext'
import { useContext, useEffect, useState } from 'react'

function MerchCard( {itemData} ) {
  const { 
        state: { cart }, 
        dispatch,
    } = useContext(CartContext);

  const [size, setSize] = useState('S');
//   useEffect(() => {
//     console.log(item)
//   })

  const { name, images, description, price } = itemData;
  return (
    <div className='item-card merch'>
        <h3 className='gear-title'>{name}</h3>
        <img src={images.staticImg}alt={name} className="tempimg"/>
        <h4 className='merch-description'>{description}</h4>
       
       <div className='size-select'>
        <label htmlFor="size">Select a size</label>
          <select name="size" 
          value={size? size: 'S'}
          id="" onChange={
          (e) => setSize(e.target.value)
          }>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
          </select>
       </div>
        
        <div className='gear-bottom'>
          <p>${price}</p>
          {cart.some((item) => itemData.id === item.id) ? 
              <button className='remove-from-cart' onClick={() => dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: itemData
              })}>REMOVE</button> 
              :
              <button className='add-to-cart'onClick={() => {dispatch({type: 'ADD_TO_CART',payload: itemData}); dispatch({type:'CHANGE_SIZE', payload: {size: size, item: itemData}}) }}>ADD TO CART</button>
          }
        </div>
    </div>
  )
}

export default MerchCard