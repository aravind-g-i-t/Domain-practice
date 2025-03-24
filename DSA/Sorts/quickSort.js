function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let left=[];
    let right=[];
    let pivot=arr[0];
    for(let i=1;i<arr.length;i++){
        if(pivot>arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]

}

console.log(quickSort([5,6,1,8,3,7]));
