import React from 'react'


export default function LinkBar({url, title}) {


  return (
    <a href={url} className='w-fit py-2 md:py-4 lg:py-6 px-7 md:px-10 lg:px-14 text-lg bg-white text-blue-950 border-2 border-blue-950 hover:bg-blue-950 hover:text-white transition-all duration-300 ease-in-out hover:scale-110 rounded-bl-full rounded-tr-full font-semibold flex items-center'>
        <h1 className='text-xs md:text-lg lg:text-xl'>{title}</h1>
    </a>
  )
}
