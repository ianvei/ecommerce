import React from 'react'

function ItemCard( {name, description, staticImg, hoverImg, price}) {
  return (
    <div className='item-card'>
        <h3>{name}</h3>
        <img src={staticImg} onMouseOver={e => (e.currentTarget.src = hoverImg)} onMouseOut={e => (e.currentTarget.src = staticImg)} alt={name} className="tempimg"/>
        <h4>{description}</h4>
        <p>{price}</p>
        <button>Add to cart</button>
    </div>
  )
}

export default ItemCard