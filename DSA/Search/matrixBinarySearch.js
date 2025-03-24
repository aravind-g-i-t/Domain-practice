function binarySearch(matrix,target){
    if(!matrix.length || !matrix[0].length ){
        return false
    }
    let rows=matrix.length;
    let columns=matrix[0].length;
    let left=0;
    let right=rows*columns-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        let midValue=matrix[Math.floor(mid/columns)][mid%columns];
        if(midValue===target){
            return true;
        }else if(midValue<target){
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return false

}

let arr=[
    [1,3,4],
    [5,6,7],
    [8,9,10]
]

console.log(binarySearch(arr,10))