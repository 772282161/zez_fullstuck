/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // var a=head;
  // var b=head.next;
  // while(a != b){
  //     if(a.next == b.next){

  //     }
  // }

  if (head == null) {
    return false;
  }
  var slow = head;
  var fast = head;

  var list = [head.val]
  while (fast.next != null && fast.next.next != null) {
    list.push(slow.val)
    fast = fast.next.next;
    slow = slow.next
  }
  let odd = false;
  if (fast.next == null) {
    odd = true;
  }
  half = slow
  if (odd == false) {
    list.pop()
  }
  while (slow.next != null) {
    if (slow.val != list.pop()) {
      return false
    }
  }
  return true

};