const schedule = require('node-schedule');

// Get the current time
/*const currentTime = new Date();

// Calculate the desired execution time with a 1-minute delay
const executionTime = new Date(currentTime.getTime() + 1 * 60 * 1000);

// Schedule the job to run at the desired execution time
const job = schedule.scheduleJob(executionTime, () => {
  console.log('Job ran @', new Date().toString());
});*/

//corntab gutru.com


//schedule.scheduleJob('m-job','*/2 * * * * *',()=>{
  //console.log('I Ran...')
  //schedule.cancelJob('m-job');
//})



//Best Practice
const myJob = schedule.scheduleJob('m-job','*/2 * * * * *',()=>{
  console.log('I Ran...')
  myJob.cancel();

})
/*
┌───────── minute (0 - 59)
│ ┌───────── hour (0 - 23)
│ │ ┌───────── day of month (1 - 31)
│ │ │ ┌───────── month (1 - 12)
│ │ │ │ ┌───────── day of week (0 - 7) (Sunday is 0 or 7)
│ │ │ │ │
│ │ │ │ │
* * * * *
*/