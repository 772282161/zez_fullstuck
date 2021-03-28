// this.val代表当前节点的值，this.next指向下一个节点，若this.next为null(对象)，则说明该节点为链表的最后一个节点。

// PS：把下一个节点赋值给当前对象的next属性，通过这样的方式连接

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let cnext = curr.next;
        curr.next = prev === null ? null : prev
        prev = curr;
        curr = cnext;
    }
    return prev
};