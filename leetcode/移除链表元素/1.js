function ListNode() {
    this.val = val;//值
    this.next = null;

}


const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(6);
const n4 = new ListNode(3);
const n5 = new ListNode(4);
const n6 = new ListNode(5);
const n7 = new ListNode(6);

n1.next= n2;
n2.next= n3;
n3.next= n4;
n4.next= n5;
n5.next= n6;
n6.next= n7;
console.log(n1);

function removeElements(head,val){//head 头结点， val要检查的值
    //如果当前节点，下一个节点的值为val，则当前节点的next 指向next的next，（相当于跳过val，则相当于移除元素）
    //如果头结点的值为val，
    const dummy = {//哨兵节点  假
        //val 属性为空，假的，服务一下
        next:head //哨兵节点为头结点，可能是val的节点服务，保持链表
    }
    let current = dummy;//当前节点先指向哨兵节点
    while(current && current.next){//遍历  尾结点  少判断一次
        let next = current.next//去当前节点的下一个节点
        if(next.val === val){
            current.next = next.next;//值为val  下一个节点从链表式关系中移除了

        }
        if(next.val  !== val){//不要移除的
        current = next;
        }
    }
    return dummy.next;//返回dummy指向下一个next，移除dummy
}

console.log(removeElements(n1,6));