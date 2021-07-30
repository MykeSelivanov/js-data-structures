class Node {
    // Lower values indicate higher priority
    constructor(data, priority) {
      this.data = data;
      this.priority = priority;
      this.next = null;
    }
  }
  class PriorityQueue {
    constructor(){
      this.head = null;
    }
    push(d, p) {
      var temp = new Node(d, p);
      let start = this.head; // pointer
      // first node 
      if(this.head === null) {
        this.head = temp;
        return;
      }
      // if pushed node's priority is smaller than first/head's priority
      if (this.head.priority > p) {
        // insert New Node before head
        temp.next = this.head;
        this.head = temp;
        return;
      } else {
        // traverse the list and find a position to insert new node
        while (start.next != null && start.next.priority < p) {
          start = start.next;
        }
        // either at the ends of the list or at required position
        temp.next = start.next;
        start.next = temp;
      }
    }
  }
  // Create a Priority Queue
  // Queue: 7.4.5.6  Priorities: 0.1.2.3
  var pq = new PriorityQueue();
  pq.push(4, 1);
  pq.push(5, 2);
  pq.push(6, 3);
  pq.push(7, 0);
  console.log(pq);