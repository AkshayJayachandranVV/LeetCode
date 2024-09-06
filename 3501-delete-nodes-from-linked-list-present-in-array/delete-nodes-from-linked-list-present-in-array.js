/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {

    const numSet = new Set(nums);
    let curr = head
    let prev

    while (curr) {
        if (numSet.has(curr.val)) {
            if (head == curr) {
                head = head.next
            } else {
                prev.next = curr.next

            }
        }else{
            prev = curr
        }
        curr = curr.next
    }

    return head


};