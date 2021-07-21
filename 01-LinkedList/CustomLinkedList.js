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
    insertTail(data) {
        if (this.head === null) throw new Error('LinkedList is empty');
        let node = new Node(data);
        let current = this.head;

        while(current !== null){
            if(current.next === null){
                current.next = node;
                break;
            }
            current = current.next;
        }
    }

    // Remove at index
    removeNodeAtIndex(index){
        if (this.head === null) throw new Error('LinkedList is empty');
        let count = 0;
        let current = this.head;
        let previous = this.head;

        while(current !== null){
            if (count === index){
                previous.next = current.next;
            }
            previous = current;
            current = current.next;
            count++;
        }
    }

    // Clear list
    clearList(){
        this.head = null;
    }

    // Print list data
    printListData(linkedList) {
        if (linkedList.head === null) throw new Error('LinkedList is empty');
        let str = '';
        let current = linkedList.head;
        while (current !== null) {
            str = str + `[${current.data}] -> `;
            current = current.next;
        }
        console.log(str.slice(0,(str.length - 3)));
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
lList.insertTail('test');
lList.insertTail('this is tail');

lList.removeNodeAtIndex(3);
// lList.clearList();


console.log(lList.getNodeAtIndex(0));

lList.printListData(lList);
