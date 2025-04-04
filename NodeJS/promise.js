let myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success=false;
        if(success){
            resolve('Operation is successful')
        }else{
            reject ('Operation failed')
        }

    },3000);
});

myPromise.then((result)=>{
    console.log(result);
    
}).catch((error)=>{
    console.log('Error:',error);
    
});

