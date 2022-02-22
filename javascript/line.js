const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
// const d = { val: 'b' }
// const e = { val: 'e'}

a.next = b
b.next = c
// c.next = e
//删除重复元素

function ways(head) {
    let point = head //piont 为指针
    while(point && point.next)  {
        if(point.val == point.next.val) {
            point.next = point.next.next
        } else {
            point = point.next
        }
        return point
    }
}
// console.log(ways(a));

//链条反向输出
function reverseList(head) {
    prev = null;   // 2 //记录当前节点的前一个节点为pre:null
    curr = head;   // 3 // 当前节点记为curr
    while (curr != null) {   //4
        nextTemp = curr.next; //5 //保存当前节点指向的下一个节点
        curr.next = prev;  // 6  //当前节点指向前一个节点即pre
        prev = curr;  //7 // 此时pre 指针移到下一个节点cur
        curr = nextTemp; //8  此时当前指针移到下一个节点即 保存的curr.next
    } 
    return prev;  //9
    //while结束后，将翻转后的最后一个节点（即翻转前的第一个结点head）的链域置为NULL
 }
 console.log(reverseList(a));
