/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    let array=[]
    function traversal(root){
        if(root){
            array.push(root.val)
            if(root.children){
                for(let child of root.children){
                    traversal(child)
                }
            }
        }
    }

    traversal(root)
    return array
    
};