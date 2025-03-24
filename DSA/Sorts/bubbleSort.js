function bubbleSort(arr){
    for(let i=arr.length-1;i>0;i--){
        let flag=0;
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                flag++;
            }
        }
        if(!flag){
            return arr;
        }
    
    }
    return arr;
}

console.log(bubbleSort([2,1,3,4,6,8]));
