class MaxHeap{
    constructor(){
        this.heap=[];
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }

    getLeftChildIndex(index){
        return 2*index+1
    }

    getRightChildIndex(index){
        return 2*index+2
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1)

    }

    heapifyUp(index){
        let parentIndex=this.getParentIndex(index);
        while(index>0 && this.heap[parentIndex]<this.heap[index]){
            this.swap(index,parentIndex);
            index=parentIndex;
            parentIndex=this.getParentIndex(index)
        }
    }

    heapifyDown(index){
        let largest=index;
        const leftChild=this.getLeftChildIndex(index)
        const rightChild=this.getRightChildIndex(index)

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
          }
      
          if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
          }
      
          if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
          }
    }

    extractMax(){
        if(this.heap.length===0){
            return null;
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        const maxValue=this.heap[0];
        this.heapifyDown(0);
    }




}