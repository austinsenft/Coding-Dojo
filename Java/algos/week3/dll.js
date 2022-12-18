/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DLLNode {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null 
        this.tail = null 
    }


    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */

    // AKA NEW HEAD DECLARATION
    insertAtFront(data) {
        let newNode = new DLLNode(data)
        // if is empty 
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        }

        newNode.next = this.head
        this.head.previous = newNode 
        this.head = newNode
        return this
        
        
    }

    // PRINT VALUES OF RUNNER
    printValues() {
        // DLL IS EMPTY
        if (this.head === null) {
            console.log('DLL is empty.')
            return
        }
        // DLL IS NOT EMPTY
        let runner = this.head
        while (runner !== null) {
            console.log(runner.value)
            runner = runner.next
        }
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {}
}
let dll = new DoublyLinkedList
dll.insertAtFront(1);
dll.insertAtFront(2);
dll.insertAtFront(3);
console.log(dll);
// dll.printValues();
