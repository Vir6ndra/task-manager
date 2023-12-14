import React from 'react'
import SidebarItem from './SidebarItem'
import Icon1 from "./SidebarIcons/SidebarIcon1.svg"
import Icon2 from "./SidebarIcons/SidebarIcon2.svg"
import Icon3 from "./SidebarIcons/SidebarIcon3.svg"
import Icon4 from "./SidebarIcons/SidebarIcon4.svg"
import Icon5 from "./SidebarIcons/SidebarIcon5.svg"
import './Sidebar.css'
function Sidebar() {
  return (
    <div className=' bg-black text-white w-1/5  rounded-3xl flex flex-col items-center shadow-sm sidebar justify-between p-8 sidebar-item-center' >
      <div className='flex flex-col'>
      <h3 className='text-4xl  font-black leading-10 my-10 sidebar-text sidebar-borad '>Board.</h3>
      <SidebarItem title="Dashboard" icon={Icon1}/>
      <SidebarItem title="Transactions" icon={Icon2}/>
      <SidebarItem title="Schedules" icon={Icon3}/>
      <SidebarItem title="Users" icon={Icon4}/>
      <SidebarItem title="Settings" icon={Icon5}/>
      </div>
      <div className='flex flex-col w-full pl-6 '>
        <p className='mb-4 text-base font-medium  sidebar-text'>Help</p>
        <p className='text-base font-medium  sidebar-text'>Contact Us</p>
      </div>
    </div>
    
  )
}

export default Sidebar