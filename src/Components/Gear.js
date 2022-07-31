import React from 'react'
import itemData from '../data/itemData'
import ItemCard from '../ItemCard'

function Gear() {
  return (
    <div className='gear-cont'>
    {itemData.map(item => {
        // console.log(item.staticImg)
        return(
            <ItemCard key={item.id} itemData={item}/>
    )})}
    </div>
  )
  
}


export default Gear