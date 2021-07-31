class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// create Binary Search Tree
class BST {
    constructor() {
        this.root = null;
    }
    // insert
    insert(data) {
        let newNode = new Node(data);
        // check if tree is empty
        if (this.isEmpty()) { // this.root === null
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            // if same data exists
            if (newNode.data === temp.data) return undefined;
            // check if new node data is 
            // bigger than or smaller than temp.data
            if (newNode.data < temp.data) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
    // check if empty
    isEmpty() {
        return this.root ? false : true;
    }
    contains(data) {
        if (this.isEmpty()) return false;
        let temp = this.root;
        while (temp) {
            if (data < temp.data) {
                temp = temp.left;
            } else if (data > temp.data) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }
}
// init
let bst = new BST();
bst.insert(10);
bst.insert(8);
bst.insert(11);
bst.insert(9);
console.log(bst);
console.log(bst.isEmpty());
console.log(bst.contains(8));