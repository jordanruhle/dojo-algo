/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
  constructor() {
    /**
     * 0th index not used, so null is a placeholder. Not using 0th index makes
     * calculating the left and right children's index cleaner.
     * This also effectively makes our array start at index 1.
     */
    this.heap = [null];
  }

  /**
   * Retrieves the top (minimum number) in the heap without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {?number} Null if empty.
   */
  top() {
    return this.heap[1]
  }
  /**
   * Inserts a new number into the heap and maintains the heaps order.
   * 1. Push new num to back then.
   * 2. Iteratively swap the new num with it's parent while it is smaller than
   *    it's parent.
   * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
   * - Space: O(1) constant.
   * @param {number} num The num to add.
   */
  insert(num) {
    // PUSH THE NUM TO THE ARRAY(this.heap)
    this.heap.push(num);
    // SHIFT UP LOGIC
    // let startIndex = this.heap.length - 1
    let childIdx = this.heap.length - 1
    while (childIdx > 1) {
      // FIND PARENT INDEX USING Math.floor(index / 2)
      let parentIdx = Math.floor(childIdx / 2);
      // COMPARE PARENT VALUE > CHILD VALUE
      if (this.heap[parentIdx] > this.heap[childIdx]) {
        // SWAP THE PARENT AND CHILD
        let temp = this.heap[childIdx];
        this.heap[childIdx] = this.heap[parentIdx]
        this.heap[parentIdx] = temp
      }
      else {
        break
      }
      // SET STARTINDEX TO PARENT INDEX
      childIdx = parentIdx
    }
  }
  extract() {
    // SWAP FIRST AND LAST ELEMENT
    [this.heap[1],this.heap[this.heap.length-1]]=[this.heap[this.heap.length-1],this.heap[1]]
    // POP LAST ELEMENT AND STORE INSIDE VARIABLE
    let min = this.heap.pop()
    let parentIdx = 1;
    let leftChildIdx = parentIdx * 2
    // START SHIFT DOWN LOGIC
    while(leftChildIdx < this.heap.length){
      // IS THERE A RIGHT CHILD??
      let rightChildIdx = parentIdx * 2 + 1
      // CHECK TO SEE IF RIGHT CHILD INDEX EXISTS
      if (rightChildIdx < this.heap.length){
        //compare left and right child
        if (this.heap[leftChildIdx]>this.heap[rightChildIdx]){
          //take the smallest of the two and compare with parent
          //swap if necessary
          if (this.heap[rightChildIdx]<this.heap[parentIdx]){
            [this.heap[rightChildIdx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[rightChildIdx]]
            //set parent index to right child
            parentIdx = rightChildIdx
          }
        }
        if (this.heap[leftChildIdx]<this.heap[rightChildIdx]){
          //take the smallest of the two and compare with parent
          //swap if necessary
          if (this.heap[leftChildIdx]<this.heap[parentIdx]){
            [this.heap[leftChildIdx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[leftChildIdx]]
            //set parent index to left child
            parentIdx = leftChildIdx
          }
        }
      }
      if (this.heap[leftChildIdx]<this.heap[parentIdx]){
        [this.heap[leftChildIdx],this.heap[parentIdx]]=[this.heap[parentIdx],this.heap[leftChildIdx]]
        //set parent index to left child
        parentIdx = leftChildIdx
      }
      //before ending the loop calculate new leftChildIdx otherwise you get an infinite loop
      leftChildIdx = parentIdx * 2
    }
    return min
  }

  // extract() {
  //   // SWAP FIRST AND LAST ELEMENT
  //   let temp = this.heap[1]
  //   this.heap[1] = this.heap[this.heap.length - 1]
  //   this.heap[this.heap.length - 1] = temp;
  //   // POP LAST ELEMENT AND STORE INSIDE VARIABLE
  //   let extracted = this.heap.pop()

  //   let parentIdx = 1;
  //   let leftChildIdx = parentIdx * 2
  //   // START SHIFT DOWN LOGIC
  //   while (leftChildIdx < this.heap.length) {
  //     // IS THERE A RIGHT CHILD??
  //     // CHECK TO SEE IF RIGHT CHILD INDEX EXISTS
  //     if (this.heap[leftChildIdx + 1] == null) {
  //       temp = this.heap[parentIdx]
  //       this.heap[parentIdx] = this.heap[leftChildIdx]
  //       this.heap[leftChildIdx] = temp;
  //       break
  //     }
  //     // IF BOTH LEFT AND RIGHT CHILD EXISTS
  //     // COMPARE THE CHILDREN VALUES, FIND THE LESSER VALUE
  //     if (this.heap[leftChildIdx] > this.heap[leftChildIdx + 1] && this.heap[parentIdx] > this.heap[leftChildIdx + 1]) {
  //       temp = this.heap[parentIdx]
  //       this.heap[parentIdx] = this.heap[leftChildIdx + 1]
  //       this.heap[leftChildIdx + 1] = temp;
  //     }
  //     else if (this.heap[leftChildIdx] < this.heap[leftChildIdx + 1] && this.heap[parentIdx] > this.heap[leftChildIdx]) {
  //       temp = this.heap[parentIdx]
  //       this.heap[parentIdx] = this.heap[leftChildIdx]
  //       this.heap[leftChildIdx] = temp;
  //     }
  //     // COMPARE AGAINST PARENT VALUE AND SWAP IF NECESSARY
  //     // IF ONLY THE LEFT CHILD EXISTS
  //     // COMPARE AGAINST PARENT VALUE AND SWAP IF NECESSARY
  //   }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
      if (parentIdx > this.heap.length - 1) {
        return;
      }

      spaceCnt += spaceIncr;
      this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
        `${this.heap[parentIdx]} (${parentIdx})`
      );

      this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
  }
let minheap = new MinHeap();
minheap.heap = [null, 2, 7, 5, 9, 14]
minheap.printHorizontalTree()
minheap.insert(1)
minheap.printHorizontalTree()
