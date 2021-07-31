class Node {
    // Lower values indicate higher priority
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}
class PriorityQueue {
    constructor() {
        this.head = null;
    }
    push(d, p) {
        var temp = new Node(d, p);
        if (this.head === null) {
            this.head = temp;
            return;
        }
        // pointer
        let start = this.head;
        if (this.head.priority > p) {
            // Insert New Node before head
            temp.next = this.head;
            this.head = temp;
            return;
        } else {
            // Traverse the list and find a position to insert new node
            while (start.next != null && start.next.priority < p) {
                start = start.next;
            }
            // Either at the ends of the list or at required position
            temp.next = start.next;
            start.next = temp;
        }
    }
    // return top priority node
    pop() {
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null
        return temp;
    }
    // return top priority value
    peek() {
        return this.head.data;
    }
    // check if pq is emtpy
    isEmpty() {
        return this.head === null; // true or false
    }
}
// Driver code
// Create a Priority Queue
// 7.4.5.6
var pq = new PriorityQueue();
pq.push(4, 1);
pq.push(5, 2);
pq.push(6, 3);
pq.push(7, 0);
pq.pop();
console.log(pq.peek());
console.log(pq.isEmpty())
console.log(pq);