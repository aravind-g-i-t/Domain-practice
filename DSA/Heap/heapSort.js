function heapSort(arr){
    const n=arr.length;

    for(let i=Math.floor(n/2-1);i>=0;i--){
        heapify(arr,n,i)
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapSort(arr,i,0);
    }
    return arr;

}

function heapify(arr,n,i){
    let largest=i;
    let left=2*i+1;
    let right=2*i+2;

    if(left<n && arr[left]>arr[largest]){
        largest=left;
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right;
    }
    if(largest!==i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]];
        heapify(arr,n,largest);
    }

}

console.log(heapSort([5,6,7,1,9,3,5,7,2]));
