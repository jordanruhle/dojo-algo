class BSTNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null;
    }

    min(current = this.root) {
        // BST is this
        if (this.isEmpty()) {
            return null;
        }
        // not empty
        let runner = current;
        while (runner.left != null) {
            runner = runner.left
        }
        return runner.data
    }

    minRecursive(current = this.root) {
        if (current == null) {
            return null;
        }
        // BASE CASE
        if (current.left == null) {
            return current.data
        }
        // FORWARD PROGRESS
        // RECURSIVE CALL
        return this.minRecursive(current.left)
    }

    max(current = this.root) {
        // IF BST IS EMPTY
        if (this.isEmpty()) {
            return null;
        }
        // IF BST IS NOT EMPTY
        let runner = current;
        while (runner.right != null) {
            runner = runner.right
        }
        return runner.data;
    }

    maxRecursive(current = this.root) {
        if (current == null) {
            return null;
        }
        // BASE CASE
        if (current.right == null) {
            return current.data;
        }
        // FORWARD PROGRESS
        // RECURSIVE CALL
        return this.maxRecursive(current.right)
    }

    contains(searchVal) {
        // SET RUNNER AT ROOT
        let runner = this.root;
        // BST IS EMPTY
        if (this.isEmpty()) {
            return null;
        }
        // BST IS NOT EMPTY
        // while loop
        while (runner != null) {
            // searchVal is EQUAL to runner data
            if (runner.data == searchVal) {
                return true;
                // searchVal is LESS THAN to runner data
            }
            else if (searchVal > runner.data) {
                runner = runner.right;
                // searchVal is GREATER THAN to runner data
            }
            else if (searchVal < runner.data) {
                runner = runner.left;
            }
        }
        return false;
    }

    containsRecursive(searchVal, current = this.root) {
        // base case
        if (current === null) {
            return false
        }
        // FORWARD PROGRESS
        // RECURSIVE CALL
        if (searchVal === current.data) {
            return true
        } else if (searchVal > current.data) {
            return this.containsRecursive(searchVal, current.right)
        } else {
            return this.containsRecursive(searchVal, current.left)
        }
    }

    insert(newVal) {
        // BST IS EMPTY
        if (this.isEmpty()){
            // CREATE A NEW BST NODE
            // POINT THE ROOT TO THE NEW BST NODE
            // RETURN THIS
            this.root = new BSTNode(newVal)
            return this;
        }
        // BST IS NOT EMPTY
        // SET THE RUNNER AT THE ROOT
        let runner = this.root
        while(true){
            // COMPARE THE newValue TO runner data
            if(newVal > runner.data ) {
                // CHECK TO SEE IF THE runner LEFT or RIGHT POINTS TO ANOTHER NODE
                // IF LEFT or RIGHT points to NULL
                if(runner.right === null){
                    runner.right = new BSTNode(newVal)
                    return this;
                } 
                // POINT THE runner LEFT or RIGHT to the NEW BST NODE
                runner = runner.right
            }
            // COMPARE THE newValue TO runner data
            if(newVal < runner.data ) {
                // CHECK TO SEE IF THE runner LEFT or RIGHT POINTS TO ANOTHER NODE
                // IF LEFT or RIGHT points to NULL
                if(runner.left === null){
                    runner.left = new BSTNode(newVal)
                    return this;
                } 
                // POINT THE runner LEFT or RIGHT to the NEW BST NODE
                    runner = runner.left
            }
        }
    }
    // example of depth first search
    toArrInOrder(node = this.root, vals = []){
        //Basecase
        console.log(node)
        if(node != null){
            //forward progress to left
            this.toArrInOrder(node.left, vals)
            //middle (after going all the way left)
            vals.push(node.data)
            //forward progress to left
            this.toArrInOrder(node.right, vals)
        }
        return vals
    }

    //  findClosestValue(target, current = this.root){
    //     // if Tree is empty
    //     if(current == null){
    //         return null;
    //     }
    //     // Set runner / distance/ closest
    //     let runner = current;
    //     let distanceAway = Math.abs(current.data - target);
    //     let closest = current.data;
    //     while(runner != null){
    //         if(runner.data == target){
    //             return runner.data
    //         }
    //         if( Math.abs(runner.data - target) < distanceAway){
    //             distanceAway = Math.abs(runner.data - target)
    //             closest = runner.data
    //         }
    //         if(runner.data < target){
    //             runner = runner.right
    //         }
    //         else {
    //             runner = runner.left
    //         }
    //     }
    //     return closest;
    //  }

    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

}


const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
// const threeLevelTree = new BinarySearchTree();
// threeLevelTree.root = new BSTNode(10);
// threeLevelTree.root.left = new BSTNode(5);
// threeLevelTree.root.left.left = new BSTNode(2);
// threeLevelTree.root.left.right = new BSTNode(6);
// threeLevelTree.root.right = new BSTNode(15);
// threeLevelTree.root.right.left = new BSTNode(13);

// console.log(threeLevelTree.min())
// threeLevelTree.print()

// console.log(threeLevelTree.max())
// console.log(threeLevelTree.maxRecursive())
// console.log(threeLevelTree.min())
// console.log(threeLevelTree.minRecursive())

// console.log(threeLevelTree.contains(6))
// console.log(threeLevelTree.contains(13))
// console.log(threeLevelTree.contains(20))
// console.log(threeLevelTree.contains(10))

// console.log(threeLevelTree.containsRecursive(6))
// console.log(threeLevelTree.containsRecursive(13))
// console.log(threeLevelTree.containsRecursive(20))
// console.log(threeLevelTree.containsRecursive(10))

// console.log(threeLevelTree.findClosestValue(4))
// console.log(threeLevelTree.findClosestValue(12))
// console.log(threeLevelTree.findClosestValue(14))
// console.log(threeLevelTree.findClosestValue(3))
// console.log(threeLevelTree.findClosestValue(7))

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/

const fullTree = new BinarySearchTree();
fullTree
  .insert(25)
  .insert(15)
  .insert(10)
  .insert(22)
  .insert(4)
  .insert(12)
  .insert(18)
  .insert(24)
  .insert(50)
  .insert(35)
  .insert(70)
  .insert(31)
  .insert(44)
  .insert(66)
  .insert(90);
fullTree.print();
console.log(fullTree.toArrInOrder())