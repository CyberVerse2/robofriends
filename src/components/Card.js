import React from 'react'
  
const Card = function ({ name, email, id }) {
  return ( 
    <div className='bg-light-green dib br3 ma2 grow bw2 s5'>
      <img src={`https://robohash.org/${id}?200x200`} alt='card'/>
      <div>
        <h2 className='tc'>{name}</h2>
        <p className='tc'>{email}</p>
      </div>
    </div>
  )
} 
export default Card