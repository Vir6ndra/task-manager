import React, { useEffect,useState } from 'react'
import InfoCardWrapper from './Dashboard/InfoCardWrapper'
import Sidebar from './Sidebar/Sidebar'
import PieChart from './Card/Pie'
import Activity from './Card/Activity'
import Schedule from './Card/Schedule'
import "./homepage.css"
import { useNavigate } from 'react-router-dom'
import {FiMenu,FiLogOut} from 'react-icons/fi'
import SidebarItem from './Sidebar/SidebarItem'
import Icon1 from "./Sidebar/SidebarIcons/SidebarIcon1.svg"
import Icon2 from "./Sidebar/SidebarIcons/SidebarIcon2.svg"
import Icon3 from "./Sidebar/SidebarIcons/SidebarIcon3.svg"
import Icon4 from "./Sidebar/SidebarIcons/SidebarIcon4.svg"
import Icon5 from "./Sidebar/SidebarIcons/SidebarIcon5.svg"
function HomePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [menuClick,setMenuClick] = useState(false);
  useEffect(() => {
    const locuser = localStorage.getItem('email');
    if(locuser){
      setUser(locuser);
    }else{
      navigate('/signin')
    }
  },[user,navigate])
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 850) {
        setMenuClick(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className='p-12 flex justify-between bg-gray-100 align-cneter'>
      <Sidebar />
      
      <div className='w-10/12 pl-12 border-3 dashboard-padding align-cneter' >
          <div className='w-full h-fit flex justify-between '>
              <div className='flex h-fit w-fit'>
                <FiMenu className='menu-icon hidden' onClick={()=>{
                  setMenuClick(!menuClick)
                  console.log(menuClick);
                }}/>  
              <div className='text-4xl font-bold ml-2'>DashBoard</div>
              </div>
              <div className='flex h-fit '>
                <div className='mr-2 mt-3 text-sm  text-gray-500 h-fit diable-user' >{user}</div>
                <FiLogOut onClick={() => {localStorage.clear();setUser('')}} className="w-5 h-5 mt-2"/>
              </div>
             </div>
             {menuClick && <div className='menu-dropdown '>
             <SidebarItem title="Dashboard" icon={Icon1} className='text-gray-500'/>
            <SidebarItem title="Transactions" icon={Icon2}/>
            <SidebarItem title="Schedules" icon={Icon3}/>
            <SidebarItem title="Users" icon={Icon4}/>
            <SidebarItem title="Settings" icon={Icon5}/>
                  </div>}
      <InfoCardWrapper className = 'h-3/6' />
      <Activity/>
      <div className='flex justify-around w-full pie-schedule-flex'>
        <div className='w-1/2 pr-5 full-width'><PieChart/></div>
        <div className='w-1/2 pl-5 full-width'><Schedule/></div>
        </div>
      </div>
      </div>
    
  )
}

export default HomePage