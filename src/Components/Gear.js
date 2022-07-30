import React from 'react'
import itemData from '../data/itemData'
import ItemCard from '../ItemCard'

function Gear() {
  return (
    <div className='gear-cont'>
    {itemData.map(item => {
        return(
            <ItemCard name={item.name} description={item.description} staticImg={item.images.static} hoverImg={item.images.hover} price={item.price}/>
    )})}
    </div>
  )
  
}


export default Gear