// Priority Queue implementation with Linked List

class Node {
    // lower values implement higher priority
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// descending order high => priority => low

class PriorityQueue {
    constructor(){
        this.head = null;
    }

    // push
    pushNode(data, priority){
        let newNode = new Node(data, priority);
        
        // check if priority queue is empty
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            let previous = this.head;
            while (current !== null){
                if (current.priority < newNode.priority){
                    previous = current;
                    current = current.next;
                } else if (current.priority > newNode.priority){
                    previous.next = newNode;
                    newNode.next = current;
                }
            }
        }
        return this;
    }

    // pop

    // peek

}

let pq = new PriorityQueue();
pq.pushNode(4,4);
pq.pushNode

