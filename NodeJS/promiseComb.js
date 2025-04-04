let P1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=false;
        if(success){
            resolve('P1 is successful')
        }else{
            reject ('P1 failed')
        }

    },3000);
});

let P2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=false;
        if(success){
            resolve('P2 is successful')
        }else{
            reject ('P2 failed')
        }

    },2000);
});

let P3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=false;
        if(success){
            resolve('P3 is successful')
        }else{
            reject ('P3 failed')
        }

    },1000);
});

Promise.allSettled([P1,P2,P3])
.then((result)=>console.log(result))
.catch((error)=>console.log(error));