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
var deleteDuplicates = function(head) {

   if(!head || !head.next) return head 

    let curr = head
    let prev = null
    let count 
    while(curr){
        count = 0
        let newCurr = curr.next
        while(newCurr && curr.val == newCurr.val){
            count ++
            newCurr = newCurr.next
        }
        if(count>0){
            if(curr == head){
                head = newCurr
                curr = newCurr
            }else{
                prev.next = newCurr
                curr = newCurr
            }
        }else{
            prev = curr
            curr = newCurr
        }

    }

   return head
};