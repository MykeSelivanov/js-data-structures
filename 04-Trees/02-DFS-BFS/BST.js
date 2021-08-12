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

    BFS() {
        // iteratively
        // create a var current to store a root node
        let currentNode = this.root;
        // 2 arrays
        // 1 - results = []
        let results = [];
        // 2 - queue = []
        let queue = [];

        // push current to queue
        queue.push(currentNode);
        // loop until queue.length is true
        while(queue.length) {
            // current is equal to queue.shift()
            currentNode = queue.shift();
            // push current value to results
            results.push(currentNode.value);
            // check if current has left node, push current.left to the queue
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            // check if current has right node, push current.right to the queue
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return results;
        // return results array at the end
    }

    DFSPreOrder() {
        let results = [];
        function preOrderHelper(currentNode) {
            results.push(currentNode.value);
            if(currentNode.left) preOrderHelper(currentNode.left);
            if(currentNode.right) preOrderHelper(currentNode.right);
        }
        preOrderHelper(this.root);
        return results;
    }

    DFSInOrder(){
        let results = [];
        function inOrderHelper(currentNode){
            if(currentNode.left) inOrderHelper(currentNode.left);
            results.push(currentNode.value);
            if(currentNode.right) inOrderHelper(currentNode.right);
        }
        inOrderHelper(this.root);
        return results;
    }

    DFSPostOrder(){
        let results = [];
        function postOrderHelper(currentNode){
            if(currentNode.left) postOrderHelper(currentNode.left);
            if(currentNode.right) postOrderHelper(currentNode.right);
            results.push(currentNode.value);
        }
        postOrderHelper(this.root);
        return results;
    }
}

let bst = new BST();
console.log(bst.insert(10));
console.log(bst.insert(8));
console.log(bst.insert(6));
console.log(bst.insert(9));
console.log(bst.insert(12));
console.log(bst.insert(11));
console.log(bst.insert(13));

// BFS
// expected [10, 8, 12, 6, 9, 11, 13]
//          10
//      8        12
//   6    9   11    13
console.log("BFS", bst.BFS());

// DFS Pre Order
// expected [10, 8, 6, 9, 12, 11, 13]
//          10
//      8        12
//   6    9   11    13
console.log("DFS PreOrder", bst.DFSPreOrder());

// DFS In Order
// expected [6, 8, 9, 10, 11, 12, 13]
//          10
//      8        12
//   6    9   11    13
console.log("DFS InOrder", bst.DFSInOrder());

// DFS Post Order
// expected [6, 9, 8, 11, 13, 12, 10]
//          10
//      8        12
//   6    9   11    13
console.log("DFS PostOrder", bst.DFSPostOrder());


