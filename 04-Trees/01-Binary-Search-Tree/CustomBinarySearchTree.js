class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// create Binary Search tree
class BST{
    constructor() {
        this.root = null;
    }

    // insert
    insert(data){
        let newNode = new Node(data);
        // check if tree is empty
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;

        while(){
            // if same data exists 
            if (newNode.data === temp.data) return undefined;

            if(newNode.data < temp.data){
                if(temp.data === null){
                    temp.left = newNode;
                    return this;
                }
            }
        }

    }

    // check if empty
    


}

// init
let bst = new BST();
bst.insert(10);
console.log(bst);