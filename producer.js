const {Queue} =require('bullmq');

const messaqgeNotification=new Queue('email-Queue',{
    connection:{
        host:'127.0.0.1',
        port:'6379'
    }
});

async function addtoQueue(){
    const result=await messaqgeNotification.add('email to sumanth',{
        email:"pau;lsumanth@gmail.com",
        subject:"hello sumanth"
    })
    console.log('job addded to qeueu',result.id);
    
}
addtoQueue();