import React from 'react'
import './EnlargedImg.css'

export default function EnlargedImg({currentImg}) {
  return (
    <div id='enlarged-img-container'>
      <img id='enlarged-img' src={currentImg} />
    </div>
  )
}
