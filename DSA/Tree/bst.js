class Node{
    constructor(value){
        this.left=null;
        this.right=null;
        this.value=value;
    }
}



class BST{
    constructor(){
        this.root=null;
    }


    insert(value){
        let newNode=new Node(value);

        if(!this.root){
            this.root=newNode;
            return;
        }
        let current=this.root;
        while(true){
            if(current.value>value){
                if(!current.left){
                    current.left=newNode;
                    return;
                }
                current=current.left;
            }else if(current.value<value){
                if(!current.right){
                    current.right=newNode;
                    return;
                }
                current=current.right;
            }else{
                console.log('Value already exitsts');
                
            }
        }
    }

    findMinNode(node){
        while(node.left){
            node=node.left;
        }
        return node;
    }

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(node,value){
        if(!node){
            return node;
        }
        if(value<node.value){
            node.left=this.deleteNode(node.left,value);
        }else if(value>node.value){
            node.right=this.delete(node.right,value);
        }else{
            if(!node.left && !node.right){
                return null;
            }else if(!node.left){
                return node.right
            }else if(!node.right){
                return node.left;
            }
            const minNode=this.findMinNode(node.right);
            node.value=minNode.value;
            node.right(this.deleteNode(node.right,minNode.value))
        }
        return node;
    }
}