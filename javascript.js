class LinkedList{
    constructor(head = null)
    {
        this.head = head

    }
}
class Node{
    constructor(data = null)
    {
        this.data = data
        this.next = null
    }
}
let Node1 = new Node(2)
let Node2 = new Node(3)
Node1.next = Node2
let list =new LinkedList(Node1)
console.log(list.head.next.next)
console.log(list)
 const append = (value,linkedList)=>{
    let node = linkedList.head;
    let newNode = new Node(value)
        while(node !== null)
        {
            node = node.next
            if(node.next === null)
            {
                node.next = newNode
                break
            }
         
        }
} 
append(2,list)


const prepend = (value,linkedList)=>
{
    let node = linkedList.head;
    let newNode = new Node(value)
    newNode.next = node
    linkedList.head = newNode
}
prepend(12313,list)
prepend(32331,list)
console.log(list)
const size = (linkedList)=>
{
    let node = linkedList.head;
    let counter = 0
    while(node !== null)
    {
        counter++
        node = node.next
    }
    return counter
} 
console.log(size(list))
const head = (linkedList)=>
{
    return linkedList.head.data
}
console.log(head(list))
const tail = (linkedList)=>{
    let node = linkedList.head;
    while(node !== null)
    {
        node = node.next
        if(node.next === null)
        {
            break
        }
    }
    return node.data
}
console.log(tail(list))
const at = (index,linkedList)=>{
    let node = linkedList.head;
    let counter = 0
    while(node !== null)
    {
        if(counter === index)
        {
            return node.data 
        }
        node = node.next
        counter++
    }
}
console.log(at(0,list))
const pop = (linkedList)=>
{
    let number = size(linkedList)
    let counter = 0
    let node = linkedList.head;
    while(counter<number-2)
    {
        counter++
        node = node.next
    }
    node.next = null
}
console.log(list)
pop(list)
console.log(list)
const contains = (value,linkedList)=>{
    let node = linkedList.head;
    while(node.next.data !== value)
    {
        if(node.data === value)
        {
            return true
        }
        else
        {
            return false
        }
        node = node.next
    }
}
console.log(contains(32331,list))
const find = (value,linkedList)=>{
    let node = linkedList.head;
    let index = 0
    while(node.next !== null)
    {
        if(node.data === value)
        {
            return index;
        }
        node = node.next
        index++
        if(node.next === null)
        {
            return null
        }
    }
}
console.log(find(523434253452425,list))
const toString = (linkedList)=>
{
    let node = linkedList.head;
    let array = []
    let string = " "
    
    while(node !== null)
    {
        array.push(node.data)
        node = node.next
    }
    for(let i in array)
    {
        string = string+"("+array[i]+") =>"
    }
    string = string+" null"
    console.log(string)
}

toString(list)