class SLL {
    constructor() {
        this.head = node
    }
    printValues() {
        if(this.head === null){
            console.log("SLL is Empty")
            return
        }
        let runner = this.head
        while(runner != null){
            console.log(runner.value)
            runner = runner.next
        }
    }
}
