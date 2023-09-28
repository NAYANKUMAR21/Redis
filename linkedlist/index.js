class node {
  constructor(a) {
    this.data = a;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    

  }
}
let list = new node(0);
let dummy = list;
console.log(list);

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  dummy.next = new node(arr[i]);
  dummy = dummy.next;
}
console.log(list);
