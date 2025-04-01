import React from 'react'

import { CardText } from './CardText'

function HomePage() {
  return (
    <div>
      <div className='div-top'>
      <img src="/booze.jpg" alt="" className='pic' /> 
      <div className='top-words'>
      <h1 className='text-xl'>Kilimani Sports club </h1>
      <h4 className='text-xs'>Home of Champions</h4>
      </div>
      </div>

      <div className='cook-div'>
        <img src="/cook.jpg" alt="" className='cook-pic' />
        <p className='cook-words'>Kilimani Sports Club is not just a sports facility - it's a way of life. From the moment you step onto its lush grounds, you're transported into a world of athleticism, community, and leisure.</p>
      </div>

      <div className='cook-div'>
      <p className='cook-words'>Experience excellence in sports and hospitality</p>
        <img src="/spa.jpg" alt="" className='cook-pic' />
        
      </div>

      <div className='div-middle'>
        <p className='text-x1'>"THE ULTIMATE DESTINATION FOR SPORTS ENTHUSIASTS"</p>

    <div className='card-div'>
        <CardText className='m-20' />  
        </div>
      </div>
    </div>
  )
}

export default HomePage