const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

 constructor() {
      this.roots = null; 
  
    }

  root() {
   return this.roots;
  }

  add(data) {
  //  throw new NotImplementedError('Not implemented');
  //   remove line with error and write your code here
    
    const newNode=new Node(data)
    if (this.roots === null){
      this.roots=newNode;
      return;
    }
    let current=this.roots;
    while(current){
      if(newNode.data<current.data){
        if(!current.left){
          current.left=newNode;
          return;
        }
        current=current.left;}
      else{
          if(!current.right){
            current.right=newNode;
            return;
        }
        current=current.right;
      }
    }
    }
    


  has( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // const newNode=new Node(data);
    const newNode=new Node(data)
    var node = this.root();
    while (true) {
      if (node === null) {
        return false;
      }
      if (data === newNode.data) {
        return true;
      } else if (data < newNode.data) {
        node = newNode.left;
      } else {
        node = newNode.right;
      }

      return false;
    }

 
    // if(newNode.data===data){return true;}
    // else if(data<newNode.data&this.left){
    //   return this.left.has(data)
    // }
    // else if(data>this.roots&this.right){
    //   return this.right.has(data)
    // }
    // else{ return false}
  }

 find( data ) {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    var node = this.root();
  
    while (true) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        node = node.left;
      } else {
        node = node.right;
      }

      return null;
    }

 
    // if(this.roots === null) {return null;}
    // else if(data < this.roots.data && this.roots.left){
    //   return this.roots.left.find(data);
    // }
    // else if(data>this.roots.data && this.roots.right){
    //   return this.roots.right.find(data)
    // }
    // else{ return this.roots}
  }
  

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    var node = this.root();
    if (node == null) {
      return null;
    }

    while (node.left !== null) {
        node = node.left;
    }
    return node.left.data;
  }

  max() {
    var node = this.root();
    if (node == null) {
      return null;
    }
    while (node.right !== null) {
      node = node.right;
    }
    return node.right.data;
  }
}

module.exports = {
  BinarySearchTree
};


console.log(BinarySearchTree)