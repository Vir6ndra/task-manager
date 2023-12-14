import { faker } from '@faker-js/faker';
const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

const currentDate = new Date();
export function generatePieDummyData  () {
  const colors = ["#98D89E" ,"#EE8484" ,"#F6DC7D"];
    const pieData = [];
    for(let i = 0;i <6;i++){
        let month = currentDate.getMonth()-i;
        let year = currentDate.getFullYear();
    
        if (month < 0) {
          month += 12;
          year -= 1;
        }
        
        let date = {month:months[month] , year : year};
        const topProducts = [];
        for (let j = 0; j < 3; j++) {
            const color = colors[j]; 
            const name = faker.commerce.productName();
            const words = name.split(' ');
            const firstTwoWords = words.slice(0, 2).join(' ');

            const value = faker.number.int({ min: 0, max: 100 });
            topProducts.push({ color:color, value:value ,name: firstTwoWords });
          }
          pieData.push({ month: date, topProducts });
    }
return pieData;
}

export function generateActivityDummyData (){
    const activityData = [];
    for(let i = 0;i <6;i++){
        let month = currentDate.getMonth()-i;
        let year = currentDate.getFullYear();
        if (month < 0) {
          month += 12;
          year -= 1;
        }
        
        let date = {month:months[month] , year : year};
        const weekData = [];
        for (let j = 1; j <= 4; j++) {

            const week = `week ${j}`
            const userActivity = faker.number.int({ min: 100, max: 500 });
            const guestActivity = faker.number.int({ min: 100, max: 500 });
            weekData.push({ week:week , userActivity:userActivity , guestActivity:guestActivity});
          }
          activityData.push({ month: date, weekData });
        }    
        return activityData;
}


export function generateTaskDummyData(count) {
  function generateRandomDuration() {
    const startHour = faker.number.int({ min: 0, max: 23 });
    const endHour = startHour + 1;
    const duration = `${startHour.toString().padStart(2, '0')}-${endHour.toString().padStart(2, '0')}`;
  
    return duration;
  }
  const taskTitle = [
    "Complete report", "Send invitations", "Research competitors", "Update social media", "Schedule meeting", "Approve vacation requests", "Create presentation", "Organize documents", "Follow up with customers", "Attend workshop"
  ];
  const colors = ["#7786f3","#f77a7a","#f8cd7c","#7ff593"];

  const tasks = [];

  for (let i = 0; i < count; i++) {
    const num = faker.number.int({min:0,max:9});
    const colorNum = faker.number.int({min:0,max:3});
    const color = colors[colorNum];
    const title = taskTitle[num];
    const duration = generateRandomDuration();
    const location = faker.location.streetAddress()

    const task = {
      color,
      title,
      duration,
      location,
    };

    tasks.push(task);
  }

  return tasks;
}







