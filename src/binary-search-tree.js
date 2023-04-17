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


  }

 find( data ) {

  var node = this.root();

  
    // while (node ) {
    //   if (!node ) {
    //     return null;
    //   }
    //   if (data === node.data) {
    //     return node;
    //   }
    //   if (data >node.data) {
    //     node = node.right;
    //   } else {
    //     node = node.left;
    //   }

    //   return null;
    // }
    while (node ){
    if(node.data) {
    if(node.data===data) {return node;}
    if(data < node.data){
      node=node.left
    }
    else{
      node=node.right
    }}
    else{return null;}
  }
   
  }
  

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    var node = this.root();
    if (!node) {
      return null;
    }

    while (node.left ) {
        node = node.left;
    }
    return node.data;
  }

  max() {
    var node = this.root();
    if (!node) {
      return null;
    }
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};
