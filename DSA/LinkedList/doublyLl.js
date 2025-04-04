class newNode{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    prepend(val){
        let newNode=new Node(val)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            return;
        }
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
    }

    append(val){
        let newNode=new Node(val)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
            return;
        }
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
        
    }

    deleteByValue(val){
        if(!this.head){
            return;
        }
        
    }
}