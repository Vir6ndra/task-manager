import React from 'react'
function InfoCard({color,title,value,icon}) {
  return (
    <div className='h-full w-1/5 rounded-3xl flex justify-between align-top shadow-sm infocard' style={{background:color}} >
        <div className='p-5 infocard-padding info-text'>
      <p className='pt-4 font-extrabold pb-1  '  style={{fontFamily:"Lato"}}>{title}</p>
      <p className='font-black lg:text-2xl leading-8 '  style={{fontFamily:"Open Sans"}}>{value}</p>
        </div>
      <img src={icon} alt="icon img"  className='mr-4 h-6 mt-3 icon-size'/>
    </div>
  )
}

export default InfoCard