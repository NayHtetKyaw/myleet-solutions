class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  firstNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
    console.log(this.head);
  }

  lastNode(data) {
    let node = new Node(data);
    let current;

    if (this.head !== null) {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    } else {
      this.head = node;
    }
    this.size++;
    console.log(this.head);
  }

  middleNode(data, index) {
    const node = new Node(data);
    let current, previous;
    let count = 0;

    if (index < 0 || index > this.size) {
      return;
    }

    if (index === 0) {
      this.firstNode(data);
    } else {
      current = this.head;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      node.next = current;
      previous.next = node;
      this.size++;
      console.log(this.head);
    }
  }
}

const ll = new LinkedList();
ll.firstNode(11);
ll.lastNode(14);
ll.middleNode(12, 0);
