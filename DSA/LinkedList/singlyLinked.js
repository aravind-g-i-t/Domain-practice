class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.count=0;
    }
}

class Ll{
    constructor(){
        this.head=null;

    }

    prepend(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            return
        }
         newNode.next=this.head;
         this.head=newNode;
    }

    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            return
        }
         let current=this.head;
         while(current.next){
            current=current.next;
         }
         current.next=newNode;
    }

    removeByValue(value){
        if(!this.head){
            console.log('Value doesnot exist');
            return;
        }
        if(this.head.value===value){
            this.head=this.head.next;
            return;
        }
        let current=this.head;
        while(current.next){
            if(current.next.value===value){
                current.next=current.next.next;
            }
        }
    }

    print(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }

    reverse(){
        let prev = null;
        let current=this.head;
        while(current){
            let next=current.next;
            current.next=prev;
            prev=current;
             current=next;
        }
        this.head=prev;
    }


}

let linkedList=new Ll();
linkedList.append(5);
linkedList.append(6);
linkedList.append(3);
linkedList.append(8);
linkedList.append(4);
linkedList.reverse()
linkedList.print()