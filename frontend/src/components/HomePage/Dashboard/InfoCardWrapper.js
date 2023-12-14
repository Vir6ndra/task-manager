import React from 'react'
import InfoCard from './InfoCard'
import Infocard1 from "../Icons/Infocard1.svg"
import Infocard2 from "../Icons/Infocard2.svg"
import Infocard3 from "../Icons/Infocard3.svg"
import Infocard4 from "../Icons/Infocard4.svg"
import "./Dashboard.css"
function InfoCardWrapper() {
  return (
    <div className=' flex justify-between infoCardWrapper mt-8'>
      <InfoCard color= "#DDEFE0" title="Total Revenues" icon ={Infocard1} value="$2,129" className='infocard-margin'/>
      <InfoCard color= "#F4ECDD" title="Total Transactions" icon ={Infocard2} value="1,520" className='infocard-margin'/>
      <InfoCard color= "#EFDADA" title="Total Likes" icon ={Infocard3} value="9,721"/>
      <InfoCard color= "#DEE0EF" title="Total Users" icon ={Infocard4} value="892"/>
    </div>
  )
}

export default InfoCardWrapper