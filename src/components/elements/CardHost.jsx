import React from 'react'

export default function CardHost({img}) {
  return (
    <div className='h-40 w-40'>
        <img src={img} alt="" />
    </div>
  )
}
