class Stack{
    constructor(){
        this.items=[];
        this.max=[];
        this.maxLength=0;
    }

    push(value){
        this.items.push(value);
        if(!this.maxLength){
            this.max.push(value);
            this.maxLength++;
            return;
        }
        if(value>=this.max[this.maxLength-1]){
            this.max.push(value);
            this.maxLength++;
        }
        return;
    }

    pop(){
        let poppedValue=this.items.pop();
        if(poppedValue===this.max[this.maxLength-1]){
            this.max.pop();
            this.maxLength--;
        }
        return poppedValue;
    }

    getMax(){
        return this.max[this.maxLength-1]
    }

    print(){
        console.log(this.items);
        
    }
}

const stack=new Stack();

stack.push(5)
stack.push(1)
stack.push(6)
stack.push(6)
stack.push(2)

stack.print()
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())


console.log(stack.getMax())