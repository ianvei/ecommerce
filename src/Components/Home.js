import React from 'react'
import logoImg from '../data/images/logo.png'
// /Users/ianveilleux/repos/ecommerce/src/data/images/logo.png

function Home() {
  return (
    <div className='home'>
      <img src={logoImg} alt="" className='logo-img'/>
      <h1 className='logo-text'>The modern pedal company.</h1>
    </div>
  )
}

export default Home