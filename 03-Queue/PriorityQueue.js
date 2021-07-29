// Priority Queue implementation with Linked List

class Node {
    // Lower values indicate higher priority
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue {
    constructor(data, priority) {
        var temp = new Node();
        temp.data = data;
        temp.priority = priority;
        temp.next = null;
        temp.head = null;
    }
    push(head, d, p) {
        var start = head;
        var temp = new Node(d, p);
        if (head === null) {
            head = temp;
        }
        //  console.log(start);
        if (head.priority > p) {
            // Insert New Node before head
            temp.next = head;
            head = temp;
        } else {
            // console.log(head);
            // Traverse the list and find a
            // position to insert new node
            while (start.next != null && start.next.priority < p) {
                start = start.next;
            }
            // Either at the ends of the list
            // or at required position
            temp.next = start.next;
            start.next = temp;
        }
        return head;
    }
}
// Driver code
// Create a Priority Queue
// 7.4.5.6
var pq = new PriorityQueue(4, 1);
pq = pq.push(pq, 4, 1);
pq = pq.push(pq, 5, 2);
pq = pq.push(pq, 6, 3);
pq = pq.push(pq, 7, 0);
console.log(pq)
