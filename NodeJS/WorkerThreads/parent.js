const path = require("path");
const { Worker } = require("worker_threads");

const worker = new Worker(path.join(__dirname, "worker.js"));


worker.on("message",message=>{
    console.log("Recieved from worker:",message);
    
});

worker.on("error",error=>{
    console.log("Worker error:",error);
    
})

worker.on("exit",code=>{
    console.log("Worker stopped with exit code",code);
    
})