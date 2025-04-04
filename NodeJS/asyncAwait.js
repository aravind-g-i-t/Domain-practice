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

async function handlePromise() {
    try {
        let result=await myPromise;
        console.log('Success:',result);
        
    } catch (error) {
        console.log('Error',error);
        
    }
}

handlePromise()