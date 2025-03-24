const { resourceUsage } = require("process");

function flattenArray(arr){
    let result=[];
    for(let element of arr){
        if(Array.isArray(element)){
            result=result.concat(flattenArray(element))
        }else{
            result.push(element)
        }
        
    }
    return result
}


let arr=[1,2,3,[4,5,[6,7],8],9];

console.log(flattenArray(arr))
