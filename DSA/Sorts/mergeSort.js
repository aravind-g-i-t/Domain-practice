function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=mergeSort(arr.slice(0,mid));
    let right=mergeSort(arr.slice(mid));
    return merge(left,right)
}

function merge(left,right){

    let l=0;
    let r=0;
    let temp=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            temp.push(left.shift());
        }else{
            temp.push(right.shift());
        }
    }
    return [...temp,...left,...right]
    

}

console.log(mergeSort([3,8,1,4,6,3,2,1]));
