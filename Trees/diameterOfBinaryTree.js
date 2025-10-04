/**
 * Calculates the diameter of a binary tree.
 * The diameter is the length of the longest path between any two nodes.
 * @param {TreeNode} root The root node of the tree.
 * @returns {number} The diameter of the tree.
 */
export function diameterOfBinaryTree(root) {
  let diameter = 0;

  // This helper function returns the height of a subtree,
  // but it calculates and updates the diameter as a side effect.
  function height(node) {
    if (node === null) {
      return 0;
    }

    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    // The diameter at this node is the sum of the heights of its subtrees.
    // We update the global maximum diameter if this path is longer.
    diameter = Math.max(diameter, leftHeight + rightHeight);

    // The height of the tree at this node is 1 + the max height of its subtrees.
    return 1 + Math.max(leftHeight, rightHeight);
  }

  height(root);
  return diameter;
}
