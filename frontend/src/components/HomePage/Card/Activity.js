import React, { useEffect, useState } from 'react'
import  { generateActivityDummyData } from './dummyDataGenerator'
import ReactEcharts from 'echarts-for-react';
import Card from './Card';
import Dropdown from './DropDown';
const activityData = generateActivityDummyData();



const ActivityChart = () => {
  const [selectedMonth,setSelectedMonth] = useState('0');
  const cur = activityData[selectedMonth];
  const months = [];
  const userActivityData = cur.weekData.map(weekData => weekData.userActivity);
  const guestActivityData = cur.weekData.map(weekData => weekData.guestActivity);
  const option = {
  
      xAxis: {
        type: 'category',
        data: ['week 1','week 2','week 3','week 4'],
        axisLine: {
          show: false, 
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            fontFamily:'Open sans',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 15,
          },
        }  
      },
      yAxis: {
        type: 'value',
        data: [0,100,200,300,400,500],
        splitLine: {
          lineStyle: {
            color: '#EAEAEA', 
          },
        },
        axisLabel: {
          textStyle: {
            fontFamily:'Open sans',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: 15,
          },
        }
      },
      series: [
    
        {
          lineStyle: {
            width: 3,
          },
          data: userActivityData,
          type: 'line',
          smooth: true,
          color:"#E9A0A0",
          showSymbol: false,
        },
        {
          lineStyle: {
            width: 3,
          },
          data: guestActivityData,
          type: 'line',
          smooth: true,
          color:"#9BDD7C",
          showSymbol: false,
  
        }
      ],
      grid: {
          left: '1%',
          top:'10%',
          right: '0%',
          bottom:'0%',
          containLabel: true,
        }
      
    };

  activityData.map(data => {
        months.push(`${data?.month?.month} ${data?.month?.year}`);
  })

    return (
        <Card >
        <div className='flex justify-between activity-margin'>
          <div className='flex flex-col activity-dropdown-flex'>
            <div className='text-lg font-bold'>Activities</div>
            <div ><Dropdown months = {months} setSelectedMonth = {setSelectedMonth} selectedMonth = {selectedMonth}/></div>
          </div>
          <div className='flex h-fit mt-4 mr-3 activity-legend-flex'>
          <div className='activity-legendl-dots rounded-full mr-3 ' style={{background:"#E9A0A0"}}></div>
            <div className='font-normal text-base mr-8'>User</div>
            <div className='activity-legendl-dots rounded-full mr-3' style={{background:"#9BDD7C"}}></div>
            <div>Guest</div>
            </div>  
        </div>

        <ReactEcharts option={option} style={{maxHeight:"15rem"}} />
        </Card>
    );
  };

export default ActivityChart