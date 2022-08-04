import React from 'react'

function About() {
  return (
    <div className='checkount-cont'>
      <div className='checkout-content'>
        <h2>Thank you for checking out pedalsupply.</h2>
        <p>The real pedals are made by <a href="https://www.chasebliss.com/"><strong style={{textDecoration: 'underline'}}>Chase Bliss</strong></a>, and the merch is made by <a href="https://www.chasebliss.com/"><strong style={{textDecoration: 'underline'}}>Ableton</strong></a></p>.
        <p>This site was made with React, react-router, and react contextAPI.</p>
        <p>Background photos are by me, on 35mm film.</p>
        <p>Take a look at my <a href="https://github.com/ianvei"><strong style={{textDecoration: 'underline'}}>Github</strong></a> for more fun projects!</p>
      </div>
    </div>
  )
}

export default About