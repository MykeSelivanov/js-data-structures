// Construct Single Node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Create/Get/Remove Nodes from Linked List
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertHead(data) {
        let node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
            this.size++;
        }
    }

    // Insert last node
    insertTail(node) {

    }

    // Get at index
    getNodeAtIndex(index) {
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (count === index) {
                return current.data;
            } else {
                count++;
                current = current.next;
            }
        }
        return -1;
    }
}


const lList = new LinkedList();

lList.insertHead(300);
lList.insertHead(200);
lList.insertHead(100);


console.log(lList.getNodeAtIndex(0));
