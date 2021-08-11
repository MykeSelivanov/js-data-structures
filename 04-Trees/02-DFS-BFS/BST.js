class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true){
            if (newNode.value < current.value) {
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                // keep moving to left subtree
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                // keep moving into right subtree
                current = current.right;
            }
        }
    }
}

let bst = new BST();
console.log(bst.insert(3));
console.log(bst.insert(2));
console.log(bst.insert(5));
