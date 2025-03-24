class Stack{
    constructor(){
        this.items=[];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        if(!this.items.length){
            return 'Stack is empty'
        }
        return this.items.pop()
    }

    peek(){
        if(!this.items.length){
            return 'Stack is empty'
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

const stack =new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 -> 20 -> 30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
stack.print()
