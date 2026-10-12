const {Worker} = require('bullmq');

const sendMail=()=>{
    new Promise((res,rej)=> setTimeout(()=> res(),5000))
}
const work=new Worker("email-Queue",async(job)=>{
    console.log(`Message received id:${job.id} `);
    console.log(`processing message`);
    console.log(`sending email to ${job.data.email}`);
   await sendMail();
},{
    connection:{
        host:"127.0.0.1",
        port:"6379"
    }
})