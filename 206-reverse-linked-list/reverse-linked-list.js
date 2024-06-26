/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
      let nextNode=null
      let previousNode=null

      while(head){
        nextNode=head.next
        head.next=previousNode
        previousNode=head
        head=nextNode
      }

      return previousNode

};