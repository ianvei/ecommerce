import React from 'react'
import merchData from '../data/merchData'
import MerchCard from './MerchCard'


function Merch() {
  return (
    <div className='merch-cont'>
    {merchData.map(item => {
        // console.log(item.staticImg)
        return(
            <MerchCard key={item.id} itemData={item}/>
    )})}
    </div>
  )
  
}

export default Merch