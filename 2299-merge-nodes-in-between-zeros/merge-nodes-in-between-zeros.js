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
var mergeNodes = function (head) {

    let curr = head;
    let sum = 0;
    let arr = [];
    while (curr) {
        if (curr.val === 0) {
            arr.push(sum);
            sum = 0
        }
        sum += curr.val;
        curr = curr.next;
    }
    
    let newCurr = head;
    for (let i = 1; i < arr.length; i++) {
        newCurr.val = arr[i];
        if (i != arr.length-1) {
            newCurr = newCurr.next
        }
    }
    newCurr.next = null
    return head


};