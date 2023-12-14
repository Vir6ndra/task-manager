import React from 'react'
import PieChart from '../Card/PieChart'

function TopProduct() {
  return (
    <div className='topProduct-container'>
        <div className="flex">
            <div>Top products</div>
            <dir>DropDown</dir>
        </div>
        <PieChart/>
    </div>
  )
}

export default TopProduct