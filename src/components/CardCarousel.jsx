import React from 'react'

export default function CardCrousel({img}) {
  return (
    <div>
        <img src={img} alt="" className='w-64 h-40 md:w-72 md:h-48 lg:w-[35rem] lg:h-96'/>
    </div>
  )
}
