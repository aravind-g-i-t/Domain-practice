

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        let newNode = new Node(data)

        if (!this.root) {
            this.root = newNode;
            return
        }
        let queue = [this.root]

        while (queue.length > 0) {
            let temp = queue.shift()
            if (!temp.left) {
                temp.left = newNode
                break
            } else {
                queue.push(temp.left)
            }

            if (!temp.right) {
                temp.right = newNode;
                break
            } else {
                queue.push(temp.right)
            }
        }
    }

    inOrder(root = this.root) {
        if (!root) {
            return
        }
        this.inOrder(root.left)
        console.log(root.data)
        this.inOrder(root.right)
    }
}

let bt = new BinaryTree()

bt.insert(10)
bt.insert(20)
bt.insert(30)
bt.insert(40)
bt.insert(50)
bt.insert(60)
bt.inOrder()














