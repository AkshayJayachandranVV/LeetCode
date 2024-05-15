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
var isPalindrome = function(head) {
    
    if(!head || !head.next) return true
    
    let fast=head
    let slow=head
    
    while(fast.next && fast.next.next){
           slow=slow.next
           fast=fast.next.next
    }
    
    slow.next=reverseLinkedList(slow.next)
    slow=slow.next
    
    while(slow){       
        if(head.val!==slow.val){
            return false
        }
        slow=slow.next
        head=head.next
        
    }
    return true
    
};

   const reverseLinkedList=function (head){
       let previousNode=null
       let nextNode=null
       while(head){
           nextNode=head.next
           head.next=previousNode
           previousNode=head
           head=nextNode
       }
       return previousNode
   };