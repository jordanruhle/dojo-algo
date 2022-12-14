class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    // validate if empty
    isEmpty() {
        return this.head === null;
    }
    // print all the values of the SLL in the console
    printValues() {
        if (this.isEmpty()) {
            console.log('SLL is empty.')
        }
        let runner = this.head
        while (runner !== null) {
            console.log(runner.value)
            runner = runner.next
        }
    }

    insertFromBack(data) {
        let newNode = new SLNode(data);
        // SLL IS EMPTY
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            // SLL IS NOT EMPTY
            let runner = this.head;
            while (runner.next !== null) {
                runner = runner.next
            }
            runner.next = newNode;
        }
        return this
    }


    seedFromArray(vals) {
        for (let data of vals) {
            this.insertFromBack(data)
        }
        return this
    }

    // adds node to from of SLL
    insertFromFront(data) {
        let newNode = new SLNode(data);
        // SLL IS EMPTY
        if (this.isEmpty()) {
            this.head = newNode;
            return this
        }
        // SLL IS NOT EMPTY
        newNode.next = this.head;
        this.head = newNode;
        return this
    }

    // remove node from from of SLL
    removeAtFront() {
        // SLL IS EMPTY
        if (this.isEmpty()) {
            return this
        }
        // SLL IS NOT EMPTY
        this.head = this.head.next;
        return this
    }

    // average values of SLL?
    average() {
        let total = 0;
        let length = 0;
        let runner = this.head;
        while (runner !== null) {
            length++;
            total += runner.value;
            runner = runner.next;
        }
        console.log(`Average is: ${total / length}`)
        return this
    }

    removeBack() {
        // SLL IS EMPTY
        if (this.head == null) {
        }
        else if (this.head.next == null) {
            // SLL HAS 1 NODE
            this.head.next = null;
        }
        // SLL IS NOT EMPTY
        else {
            let runner = this.head;
            while (runner.next.next != null) {
                runner = runner.next;
            }
            runner.next = null;
        }
        return this;
    }

    contains(target) {
        // Is empty?
        if (this.isEmpty()) {
            return false
        }
        // Run through the Singly Linked List
        let runner = this.head;
        while (runner !== null) {
            // Checking if runner's value is the target
            if (runner.value == target) {
                return true
            }
            runner = runner.next
        }
        // Did not find
        return false
    }

    removeVal(val) {
        // THE NODE TO REMOVE IS THE FIRST NODE
        if (this.head.value == val) {
            this.head = this.head.next;
            return true;
        }

        let runner = this.head
        // THE NODE TO REMOVE IS SOMEWHERE IN THE MIDDLE
        // THE NODE TO REMOVE IS THE LAST NODE
        while (runner.next != null) {
            if (runner.next.value == val) {
                runner.next = runner.next.next;
                return true;
            }
            else {
                runner = runner.next;
            }
        }
            return false;
            // THE NODE TO REMOVE IS NOT THERE
    }

    secondToLast() {
        let runner = this.head
        // SLL has 0 - 1 nodes
        if (this.head == null || this.head.next == null) {
            console.log("List is not long enough")
            return null
        // SLL has only 2 nodes
        } else if (this.head.next.next == null) {
            this.head = this.head.next
            return this
        // SLL has 3+ nodes
        } else {
            while(runner.next.next.next != null){
                runner = runner.next
            }
            runner.next = runner.next.next
        }
        return this;
    }

    kthToLast(k) {
        // return null if list isnt long enough
        // check if list is empty
        if(this.isEmpty()){
            return null
        }
        // find length of list
        let length = 0;
        let runner = this.head
        while(runner != null){
            length++
            runner = runner.next
        }
        console.log(length)
        // reset runner
        runner = this.head
        for(let i = 1; i < length-k; i++){
            runner = runner.next
        }
        runner.next = runner.next.next
    }
}





let sll = new SLL();
sll.seedFromArray([5,4,3,2,1])
sll.printValues()
console.log("~~~~~~~~~~~~~~~~~~~~~")

sll.kthToLast(3)

sll.printValues()
