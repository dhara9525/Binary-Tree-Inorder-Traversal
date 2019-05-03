// Recursive Javascript JS solution,  faster than 100.00% of JavaScript online submissions for Binary Tree Inorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var result=[];
    inorder(root);
    
    function inorder(root)
    {
        if(!root)
            return null;
        inorder(root.left);
        result.push(root.val);
        inorder(root.right);
    }
    return result;
};
