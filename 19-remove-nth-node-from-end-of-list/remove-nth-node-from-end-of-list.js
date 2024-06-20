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
    let curr=head
    let len=0

    while(curr){
        len++
        curr=curr.next
    }

    let ittr=dummy

    for(let i=0;i<len-n;i++){
         ittr=ittr.next
    }

    ittr.next=ittr.next.next

    return dummy.next
    
};