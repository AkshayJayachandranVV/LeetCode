/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    while(head){
        if(head.val==val){
            head=head.next
        }else{
            break
        }
    }

    let curr=head
    while(curr && curr.next){
        if(curr.next.val==val){
            let Next=curr.next
            curr.next=Next.next
        }else{
           curr=curr.next
        }

    }

    return head
    
};