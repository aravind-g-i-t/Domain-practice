class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class sLL {

    constructor() {
        this.head = null;
    }

    insertAtEnd(data) {
        let newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }
    insertAtStart(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    remove(data) {
        if (!this.head) {
            return;
        } else {
            if (this.head.data === data) {
                this.data = this.head.next;
                return
            }
            let temp = this.head;
            while (temp.next) {
                if (temp.next.data == data) {
                    temp.next = temp.nex.next;
                    return
                }
            }
        }
    }

    reverse() {
        let prev = null;
        let current = this.head
        let next = null

        while (current) {
            next = current.next;
            current.next = prev
            prev = current
            current = next
        }
        
        this.head = prev
    }

    display() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

let singlyLinkedList = new sLL()
singlyLinkedList.insertAtEnd(10)
singlyLinkedList.insertAtEnd(20)
singlyLinkedList.insertAtEnd(30)
singlyLinkedList.insertAtEnd(40)
singlyLinkedList.insertAtEnd(50)
singlyLinkedList.reverse()
singlyLinkedList.display()