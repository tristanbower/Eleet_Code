/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
Size() method returns the number of nodes present in the linked list.

size() {
    let count = 0; 
    let node = this.head;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
*/

/*
This method empites out the list.

clear() {
    this.head = null;
}
*/

/*
getLast() method returns the last node of the linked list.

getLast() {
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    return lastNode
}
*/

/*
getFirst() method returns the first node of the linked list.

getFirst() {
    return this.head;
}
*/
function Node(data, next) {
  this.data = data;
  this.next = next;
}

var mergeTwoLists = function (list1, list2) {
  // Create new linked list pointer
  var list3 = new Node(null, null);
  var prev = list3;

  //while both linked lists are not empty
  while (list1 !== null && list2 !== null) {
    if (list1.data <= list2.data) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
    console.log(prev.next);
  }
  //   if (list1 === null) {
  //     prev.next = list2;
  //   }
  //   if (list2 === null) {
  //     prev.next = list1;
  //   }
  //   console.log(list3.next);
  prev.next = list1 || list2;
  return list3.next;
};

var n3 = new Node(4, null);
var n2 = new Node(2, n3);
var n1 = new Node(1, n2);
var L1 = n1;

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(4, null);
var n5 = new Node(3, n6);
var n4 = new Node(1, n5);
var L2 = n4;

mergeTwoLists(L1, L2);
