class SLNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null;
    }
    // validate if empty
    isEmpty(){
        return this.head === null;
    }
    // print all the values of the SLL in the console
    printValues(){
        if (this.isEmpty()){
            console.log('SLL is empty.')
        }
        let runner = this.head
        while (runner !== null){
            console.log(runner.value)
            runner =  runner.next
        }
    }

    insertFromBack(data){
        let newNode = new SLNode(data);
        // SLL IS EMPTY
        if (this.isEmpty()){
            this.head = newNode;
        } else {
            // SLL IS NOT EMPTY
            let runner = this.head;
            while (runner.next !== null){
                runner = runner.next
            }
            runner.next = newNode;
        }
        return this
    }


    seedFromArray(vals){
        for (let data of vals) {
            this.insertFromBack(data)
        }
        return this
    }

    // adds node to from of SLL
    insertFromFront(data){
        let newNode = new SLNode(data);
        // SLL IS EMPTY
        if (this.isEmpty()){
            this.head = newNode;
            return this
        }
        // SLL IS NOT EMPTY
        newNode.next = this.head;
        this.head = newNode;
        return this
    }

    // remove node from from of SLL
    removeAtFront(){
        // SLL IS EMPTY
        if (this.isEmpty()){
            return this
        }
        // SLL IS NOT EMPTY
        this.head = this.head.next;
        return this
    }

    // average values of SLL?
    average(){
        let total = 0;
        let length = 0;
        let runner = this.head;
        while (runner !== null){
            length++;
            total += runner.value;
            runner = runner.next;
        }
        console.log(`Average is: ${total/length}`)
        return this
    }


let sll = new SLL();
sll.seedFromArray([1,2,3,4,5])
sll.printValues()
sll.insertAtFront(9)
sll.printValues()



//   /**
//      * Creates a new node with the given data and inserts that node at the front
//      * of this list.
//      * - Time: (?).
//      * - Space: (?).
//      * @param {any} data The data for the new node.
//      * @returns {SinglyLinkedList} This list.
//      */
//    insertAtFront(data) {
//     // SLL IS EMPTY
//         // CREATE A NEW NODE WITH THE GIVEN DATA
//         // POINT THE HEAD TO THE NEW NODE
//         // RETURN
//     // SLL IS NOT EMPTY
//         // CREATE A NEW NODE WITH THE GIVEN DATA
//         // SET THE NEW NODE NEXT TO THE HEAD
//         // POINT HEAD TO NEW NODE
// }

// /**
//  * Removes the first node of this list.
//  * - Time: (?).
//  * - Space: (?).
//  * @returns {any} The data from the removed node.
//  */
// removeAtFront() {
//     // SLL IS EMPTY
//         // DO NOTHING, NOTHING TO REMOVE
//     // SLL IS NOT EMPTY
//         // MOVE HEAD TO NEXT NODE
// }

// // EXTRA
// /**
//  * Calculates the average of this list.
//  * - Time: (?).
//  * - Space: (?).
//  * @returns {number|NaN} The average of the node's data.
//  */
// average() {

// }
