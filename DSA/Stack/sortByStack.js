class Stack{
    constructor(){
        this.items=[];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        if(!this.items.length){
            return null
        }
        return this.items.pop()
    }

    peek(){
        if(!this.items.length){
            return null;
        }
        return this.items[this.items.length-1]
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.join('->'));
        
    }
}


function stackSort(initialStack){
    const tempStack=new Stack()
    while (initialStack.items.length){
        let temp=initialStack.pop()
        while(tempStack.items.length && tempStack.items[tempStack.items.length-1]<temp){
            initialStack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    while (tempStack.items.length){
        initialStack.push(tempStack.pop())
    } 
}

const stack =new Stack();

stack.push(50);
stack.push(20);
stack.push(30);
// stack.print(); 
// console.log(stack.pop()); 
stackSort(stack)
stack.print()
