/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

  let dummy={next:head}
  let curr=dummy
  let len=0

  while(curr){
    len++
    curr=curr.next
  }

  console.log(len)
  let ittr=dummy

  for(let i=0;i<(len-n)-1;i++){
    ittr=ittr.next
  }
   
   let remove=ittr.next
   ittr.next=remove.next

   return dummy.next
    
};