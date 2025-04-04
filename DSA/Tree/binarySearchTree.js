class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        let newNode = new Node(data)

        if (!this.root) {
            this.root = newNode
            return
        }

        let current = this.root

        while (true) {
            if (current.data > data) {
                if(!current.left){
                    current.left = newNode
                    return
                }
                current = current.left
            }else if(current.data < data ){
                if(!current.right){
                    current.right = newNode
                    return
                }
                current = current.right
            }else{
                console.log('Data is already exists')
            }
        }
    }

    inorder(node = this.root){
        if(!node) return
        this.inorder(node.left)
        console.log(node.data)
        this.inorder(node.right)
    }

    preOrder(){
        
    }
}



let bst = new BinarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.insert(50)
bst.insert(60)
bst.inorder()