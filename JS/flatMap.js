// let obj={
//     name:'Ananthu',
//     get(name){
//         obj
//     }
// }





class Sujith extends Error{
    constructor(error){
        super(error)
    }
}

const eror=new Sujith('sujith errro')
console.log(eror.message);
