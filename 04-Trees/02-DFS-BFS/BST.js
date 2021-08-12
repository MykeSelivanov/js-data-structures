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
}

let bst = new BST();
console.log(bst.insert(10));
console.log(bst.insert(8));
console.log(bst.insert(6));
console.log(bst.insert(9));
console.log(bst.insert(12));
console.log(bst.insert(11));
console.log(bst.insert(13));

//          10
//      8        12
//   6    9   11    13

console.log(bst.BFS());