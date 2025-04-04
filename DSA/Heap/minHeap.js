class Minheap{
    constructor(){
        this.heap=[]
    }

    
    _getParentIndex(index){
        return Math.floor((index-1)/2)
    };
    
    _getLeftChildIndex(index){
        return 2*index+1
    }
    
    _getRightChildIndex(index){
        return 2*index+2
    }
    
    _swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    
    _heapifyUp(index){
        let parentIndex=this._getParentIndex(index);
        while(index>0 && this.heap[index]<this.heap[parentIndex]){
            this._swap(index,parentIndex);
            index=parentIndex;
            parentIndex=this._getParentIndex(index)
        }
        
    }
    
    insert(value){
        this.heap.push(value);
        this._heapifyUp(this.heap.length-1)
    }


    _heapifyDown(index){
        let smallest=index
        let left=this._getLeftChildIndex(index);
        let right=this._getRightChildIndex(index);
        if(left<this.heap.length && this.heap[left]<this.heap[smallest]){
            smallest=left
        }
        if(right<this.heap.length && this.heap[right]<this.heap[smallest]){
            smallest=right
        }
        if(smallest!==index){
            this._swap(index,smallest);
            this._heapifyDown(smallest)
        }
        
    }

    extractMin(){
        if(!this.heap.length){
            return null;
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let min=this.heap[0];
        this.heap[0]=this.heap.pop();
        this._heapifyDown(0);
        return min;

    }


    print(){
        console.log(this.heap);
    }
    
}


const heap=new Minheap();
heap.insert(5)
heap.insert(4)
heap.insert(1)
heap.insert(6)
heap.insert(9)
heap.insert(2)
heap.extractMin()
heap.extractMin()
heap.extractMin()

heap.print()