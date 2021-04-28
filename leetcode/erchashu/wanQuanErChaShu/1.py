class TreeNode:
    def __init__(self, left=None, right=None, data=0):
        self.left = left
        self.right = right
        self.data = data


def createTree(n, x=0):  # 创建完全二叉树
    if x <= n:
        node = TreeNode(x)  # 根节点为 0
        node.left = createTree(n, 2*x+1)
        node.right = createTree(n, 2*x+2)
    else:
        node = None
    return node


def insertTree(node, lst):  # 填充节点
    if node is not None:
        if not lst:
            return
        node.data = lst.pop(0)
        insertTree(node.left, lst)
        insertTree(node.right, lst)


def printTree(node):  # 输出
    if node is not None:
        return '{value:' + str(node.data) + ', left: ' + str(printTree(node.left)) + ', right: ' + str(printTree(node.right)) + '}'
        # return f'{{ value: {node.data}, left: {printTree(node.left)}, right: {printTree(node.right)} }}'
        # print(node.data, end=" ")
        # printTree(node.left)
        # printTree(node.right)


a = [1, 2, 4, 8, 5, 3, 6, 7]
node = createTree(len(a)-1)
insertTree(node, a)
print(printTree(node))