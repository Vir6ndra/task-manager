import React from 'react'

function Card({children}) {
  return (
    <div className='rounded-3xl bg-white mt-10 p-8 w-full card '>{children}</div>
  )
}

export default Card