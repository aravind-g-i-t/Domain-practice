class Node{
    constructor(data){
        this.data = data
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertAtEnd(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
    }

    insertAtStart(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return
        }
    }
}