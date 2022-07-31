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
        <h3>{name}</h3>
        <img src={staticImg} onMouseOver={e => (e.currentTarget.src = hoverImg)} onMouseOut={e => (e.currentTarget.src = staticImg)} alt={name} className="tempimg"/>
        <h4>{description}</h4>
        <p>{price}</p>
        
        {cart.some((item) => itemData.id === item.id) ? 
            <button onClick={() => dispatch({
                type: 'REMOVE_FROM_CART',
                payload: itemData
            })}>Remove from cart</button> 
            :
            <button onClick={() => dispatch({
                type: 'ADD_TO_CART',
                payload: itemData
            })}>Add to cart</button>
        }
        
    </div>
  )
}

export default ItemCard