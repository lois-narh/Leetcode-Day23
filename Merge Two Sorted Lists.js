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
var mergeTwoLists = function(list1, list2) {
    // Create dummy node for the merged list
    let dummy = new ListNode(0);
    let current = dummy;
    
    // While both lists have nodes
    while (list1 && list2) {
        // Compare values and add smaller value to merged list
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Append remaining nodes from list1 or list2
    current.next = list1 || list2;
    
    return dummy.next;
};
