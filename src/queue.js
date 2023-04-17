const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
  this.lengthQ=0;
  this.head=null;
  }
  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(this.lengthQ===0){
      this.head=new ListNode(value);
    }else{
      let current=this.head;
      while(current.next!==null){
        current=current.next;
      }
      const newNode=new ListNode(value);
      current.next=newNode;
      
    }
    this.lengthQ+=1;
  }

  dequeue() {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  //   if(this.lengthQ===0){
  //     return undefined;
  //   }
  //   if(this.lengthQ===1){
  //     let val=this.value;
  //     this.value=null;
  //     this.lengthQ=0;
  //     return val;
  //   }
  //   let endval=this.value;
  //   this.value=this.next.value;
  //   this.next=this.next.next;
  //   this.lengthQ-=1
  //   return endval;  
  
  let val=this.head.value;
  this.head=this.head.next;
  return val
   }
}

module.exports = {
  Queue
};
