const obj={
    name:'sujith',
    get myname(){
        return this.name
    }
    
}

const handler={
     set:(target,propert,value)=>{
        target[propert]=value
    }
}
console.log(obj.myname);

const proxy=new Proxy(obj,handler)
proxy.name="saaaaaaaaaaaaaaaaaaaaaaa"

console.log(obj.myname);
