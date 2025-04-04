class Parent{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
}
class Child extends Parent{
    constructor(myAge,myName){
        super(myAge,myName)
    }
}


const me=new Child(26,'Aravind');
console.log(me.name);
