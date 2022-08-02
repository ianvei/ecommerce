import React, { useInsertionEffect } from 'react'
import CartContext from './CartContext'
import { useContext, useEffect } from 'react'

function ItemCard( {itemData} ) {
  const { 
        state: { cart }, 
        dispatch,
    } = useContext(CartContext);
//   useEffect(() => {
//     console.log(item)
//   })
  const { name, images:{staticImg, hoverImg}, description, price } = itemData;
  return (
    <div className='item-card'>
        <h3 className='gear-title'>{name}</h3>
        <img src={staticImg} onMouseOver={e => (e.currentTarget.src = hoverImg)} onMouseOut={e => (e.currentTarget.src = staticImg)} alt={name} className="tempimg"/>
        <h4 className='gear-description'>{description}</h4>
        <div className='gear-bottom'>
          <p>${price}</p>
          {cart.some((item) => itemData.id === item.id) ? 
              <button className='remove-from-cart' onClick={() => dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: itemData
              })}>REMOVE</button> 
              :
              <button className='add-to-cart' onClick={() => dispatch({
                  type: 'ADD_TO_CART',
                  payload: itemData
              })}>ADD TO CART</button>
          }
        </div>        
    </div>
  )
}

export default ItemCard