# 树的结构类型
普通二叉树、完全二叉树、满二叉树、线索二叉树、哈夫曼树、二叉搜索树(排序树)、平衡二叉树、AVL平衡二叉树、红黑树、B树、B+树、堆

## 普通二叉树、完全二叉树、满二叉树
二叉树：最多有两棵子树的树被称为二叉树

满二叉树：二叉树中所有非叶子结点的度都是2，且叶子结点都在同一层次上

完全二叉树：如果一个二叉树与满二叉树前m个节点的结构相同，这样的二叉树被称为完全二叉树

也就是说，如果把满二叉树从右至左、从下往上删除一些节点，剩余的结构就构成完全二叉树



# 树的遍历顺序
                    1
                2       3
            4     5   6
          7   8

## 前序遍历
12345678
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root,lst) {
    if(root==null) return []
    let arr = []
    let pre = (node,array)=>{
        if(node == null) return
    
    let {left,right,val} = node
    array.push(val)
    pre(left,array)
    pre(right,array)
    }
    pre(root,arr)
    return arr
};
## 先序遍历
根->左->右  1、2、4、7、8、5、3、6
## 中序遍历
左->根->右  74825163
## 后序遍历
左->右->根 78452631
## 深度优先遍历

## 广度优先遍历

