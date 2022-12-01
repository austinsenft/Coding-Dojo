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
        // SLL IS EMPTY
        if (this.isEmpty()) {
            console.log('SLL is empty.')
            return
        }
        // SLL IS NOT EMPTY
        let runner = this.head
        while (runner !== null) {
            console.log(runner.value)
            runner = runner.next
        }
    }

    // adds new node to back of SLL
    insertFromBack(data) {
        let newNode = new SLNode(data);
        // SLL IS EMPTY
        if (this.isEmpty()) {
            this.head = newNode;
            return this
        }
        // SLL IS NOT EMPTY
        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next
        }
        runner.next = newNode;
        return this
    }

    // creates SLL from an array of values
    seedFromArray(vals) {
        for (const data of vals) {
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

    // THURSDAY --------------------------------------------------------------------//

    /**
     * Removes the last node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        // If is empty 
        if (this.isEmpty()) {
            return this
        }

        // Is just one? 
        if (this.head.next == null) {
            this.head = null
            return this
        }

        // One before the last one
        let runner = this.head;
        while (runner.next.next !== null) {
            runner = runner.next
        }
        runner.next = null
        return this
    }
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
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
            // If not, move along
            runner = runner.next
        }
        // Did not find
        return false
    }

    // EXTRA
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?node} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        if (current === null) {
            return false;
        }
        if (current.data === val) {
            return true;
        }
        return this.containsRecursive(val, current.next);
    }
}

// TESTING
let sll1 = new SLL();
sll1.insertFromBack(1)
sll1.insertFromBack(2)
sll1.insertFromBack(3)
sll1.insertFromBack(4)

sll1.insertFromFront(0)
sll1.removeAtFront()
sll1.average()
sll1.printValues()

sll1.removeBack(4)
console.log(sll1.contains(4))
sll1.containsRecursive(4)


console.log('~~~~~~~~~')