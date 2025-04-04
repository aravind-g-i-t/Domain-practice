function addBy2(a){
    return 2+a;
}

function multiplyBy3(a){
    return 3*a
}

function composed(a){
    return multiplyBy3(addBy2(a))
}

console.log(composed(5))

//piped function

const pipe=(...functions)=>(value)=>{
    return functions.reduce((acc,fn)=>fn(acc),value);
}

const pipedFn=pipe(multiplyBy3,addBy2);

console.log(pipedFn(5));
