import React, { useState,useRef,useEffect } from "react";
import { faker } from "@faker-js/faker";
import Card from "./Card";
import { generateTaskDummyData } from "./dummyDataGenerator";
import { TbMathGreater } from "react-icons/tb";
import "./Card.css"
const count = faker.number.int({ min: 2, max: 10 });
const taskData = generateTaskDummyData(count);
// console.log(taskData);

function Schedule() {
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

 
 
  return (
    <Card className="card" >
      <div className="flex justify-between " onClick={toggleDropdown}>
        <div  className='text-lg font-bold' >Today's Schedule</div>
        <div className="flex cursor-pointer h-fit align-middle text-gray-500">
           <div >See All</div>
           <TbMathGreater className="mt-1 ml-1 text-sm font-bold"/>
        </div>
      </div>

  <div className="mt-5"> 
  <div className="w-full h-2/6 flex mb-4 ">
        <div
          className="w-1 rounded-sm "
          style={{ background: `${taskData[0].color}` }}
        ></div>
        <div className="w-full ml-3">
          <div className="text-normal text-gray-600 font-semibold">
            {taskData[0].title}
          </div>
          <div className="font-light text-base text-gray-600 ">
            {taskData[0].duration}
          </div>
          <div className="font-light  text-gray-600">
            at {taskData[0].location}
          </div>
        </div>
      </div>
      <div className="w-full  h-2/6 flex ">
        <div
          className="w-1 rounded-sm "
          style={{ background: `${taskData[1].color}` }}
        ></div>
        <div className="w-full ml-3">
          <div className="text-normal text-gray-600 font-semibold">
            {taskData[1].title}
          </div>
          <div className="font-light text-base text-gray-600 ">
            {taskData[1].duration}
          </div>
          <div className="font-light  text-gray-600">
            at {taskData[1].location}
          </div>
        </div>
      </div>
  </div>

        {isOpen && (
         <div className="schedule-dropdown-container p-8 ">
         {taskData.map(task =>{
           return(
            <div className="w-full h-20 flex mb-3 bg-white rounded-r-lg pr-3 hover:bg-gray-100 "  key={task.title}>
           <div
             className="w-1 rounded-sm  "
             style={{ background: `${task.color}` }}
           ></div>
           <div className="w-full ml-3">
             <div className="text-normal text-gray-600 font-semibold">
               {task.title}
             </div>
             <div className="font-light text-base text-gray-600 ">
               {task.duration}
             </div>
             <div className="font-light  text-gray-600">
               at {task.location}
             </div>
           </div>
         </div>
           )
         })}
         </div>
        )}
    </Card>
  );
}

export default Schedule;
