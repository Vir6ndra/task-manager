import ReactEcharts from 'echarts-for-react';
import { useState } from 'react';
import Card from './Card';
import "./Card.css"
import Dropdown from './DropDown';
import  { generatePieDummyData } from './dummyDataGenerator';

const pieData = generatePieDummyData();

const PieChart = () => {
  const colors = ["#98D89E" ,"#EE8484" ,"#F6DC7D"];
  
  const [selectedMonth,setSelectedMonth] = useState('0');
  const cur = pieData[selectedMonth]
  const months = [];
  pieData.map(data => {
    months.push(`${data?.month?.month} ${data?.month?.year}`);
})

const Legend =() => {
    const array = cur?.topProducts;
  return(
    <div className='w-1/2 h-40  p-4 pt-0 lg:p-0  pie-legend-container'>
      {
        array.map(element => {
         return(
          <div key = {element.name} className="mb-3 ">
           <div className="flex items-center" key={element.name}>
            <div className="  legend-icon rounded-full mr-2" style={{backgroundColor:`${element?.color}`}}></div>
            <div className="text-normal font-semibold pie-legend-title">{element?.name}</div>
            </div>
            <div className="ml-4 text-sm  text-gray-500 ">{element?.value}%</div> 
          </div>
        )
        })
              }
    </div>
  )
}

const option = {

  tooltip: {},
  series: [
    {
      type: 'pie',
      radius:65,
      
      data: cur.topProducts,colors,
      label: {
        show: false,
      },
      itemStyle: {
        color: function (params) {
          const dataIndex = params.dataIndex % colors.length;
          return colors[dataIndex];
        },
      },
    },
  ],
  };
  return (
    <Card>
      <div className='flex justify-between pie-title-flex'>
          <div className='text-lg font-bold'> Top Products</ div>
          <div className=' mr-7'><Dropdown months = {months} setSelectedMonth = {setSelectedMonth} selectedMonth = {selectedMonth} /></div>
         </div>
        <div className='flex  mt-5 pie-flex h-5/6'>
            <ReactEcharts option={option} style={{width:"100%",height:"100%",minHeight:"150px" , maxWidth:"250px"}} className="pie" />
            <Legend/>
        </div>
      </Card>
  );
};

export default PieChart;
