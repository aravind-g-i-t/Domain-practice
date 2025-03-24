class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        if(!this.items.length){
            return 'Queue is empty'
        }
        return this.items.shift()
    }

    front(){
        if(!this.items.length){
            return 'Queue is empty'
        }
        return this.items[0]
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.join('<-'));
        
    }    
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); 
console.log(queue.dequeue()); 
console.log(queue.front()); 