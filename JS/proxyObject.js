const person={
    name:'Aravind',
    age:26
}

const handler={
    get(target,property){
        return target[property]
    },

    set(target,property,value){
        target[property]=value
    }
}

const proxy=new Proxy(person,handler);

proxy.age=27
console.log(proxy.age);
console.log(person.age);

