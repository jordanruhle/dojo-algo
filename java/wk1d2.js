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
        if (this.head === null){
            this.head = newNode;
            return this
        }

        // SLL IS NOT EMPTY
        let runner = this.head;
        while (runner.next !== null){
            runner = runner.next
        }
        runner.next = newNode;
        return this
    }
    seedFromArray(vals){
        for (let data of vals) {
            this.insertFromBack(data)
        }
        return
    }
}

let sll = new SLL();
sll.insertFromBack(1)
sll.insertFromBack(2)
sll.insertFromBack(3)
sll.insertFromBack(4)

sll.printValues()

sll.seedFromArray([1,2,3,4,5])

sll.printValues()