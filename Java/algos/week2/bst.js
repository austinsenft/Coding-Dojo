/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
// CONSTRUCTOR
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // IS EMPTY 
    isEmpty() {
        return this.root === null;
    }

    // MIN 
    min(current = this.root) {
        // BST IS EMPTY
        if (this.isEmpty()) {
            return null;
        }
        // BST IS NOT EMPTY
        let runner = current;
        while (runner.left != null) {
            runner = runner.left
        }
        return runner.data
    }

    // MIN RECURSIVE 
    minRecursive(current = this.root) {
        // BASE CASE
        if (current.left === null) {
            return current.data
        }
        // FORWARD PROGRESS
        // RECURSIVE CALL
        return this.minRecursive(current.left)
    }

    // MAX 
    max(current = this.root) {
        // BST IS EMPTY
        if (this.isEmpty()) {
            return null;
        }
        // BST IS NOT EMPTY
        let runner = current;
        while (runner.right != null) {
            runner = runner.right
        }
        return runner.data
    }

    // MAX RECURSIVE 
    maxRecursive(current = this.root) {
        // BASE CASE
        if (current.right === null) {
            return current.data
        }
        // FORWARD PROGRESS
        // RECURSIVE CALL
        return this.maxRecursive(current.right)
    }

    // Logs this tree horizontally with the root on the left.
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


    // ------------------- TUESDAY --------------------------//
    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */

    contains(searchVal) {
        // BST IS EMPTY
        if (this.isEmpty()) {
            return false;
        }
        // BST IS NOT EMPTY
        let runner = this.root;
        while (runner != null) {
            // SEARCHVAL IS EQUAL TO RUNNER.VALUE
            if (searchVal == runner.value) {
                return true;
                // SEARCHVAL IS LESS THAN RUNNER.VALUE
            } else if (searchVal < runner.value) {
                runner = runner.left;
                // SEARCHVAL IS GREATER THAN RUNNER.VALUE
            } else if (searchVal > runner.value) {
                runner = runner.right;
            }
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */

    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return false;
        }
        if (current.value === searchVal) {
            return true;
        }
        return (searchVal < current.value ? this.containsRecursive(searchVal, current.left) : this.containsRecursive(searchVal, current.right));
    }

    // ------------------- WEDNESDAY --------------------------//
    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        // BST IS EMPTY
        if (this.isEmpty()) {
            // CREATE A NEW BST NODE
            // POINT THE ROOT TO THE NEW BST NODE
            // RETURN THIS
            this.root = new BSTNode(newVal)
            return this;
        }
        // BST IS NOT EMPTY
        // SET THE RUNNER AT THE ROOT
        let runner = this.root
        while (true) {
            // COMPARE THE newValue TO runner data
            if (newVal > runner.data) {
                // CHECK TO SEE IF THE runner LEFT or RIGHT POINTS TO ANOTHER NODE
                // IF LEFT or RIGHT points to NULL
                if (runner.right === null) {
                    runner.right = new BSTNode(newVal)
                    return this;
                }
                // POINT THE runner LEFT or RIGHT to the NEW BST NODE
                runner = runner.right
            }
            // COMPARE THE newValue TO runner data
            if (newVal < runner.data) {
                // CHECK TO SEE IF THE runner LEFT or RIGHT POINTS TO ANOTHER NODE
                // IF LEFT or RIGHT points to NULL
                if (runner.left === null) {
                    runner.left = new BSTNode(newVal)
                    return this;
                }
                // POINT THE runner LEFT or RIGHT to the NEW BST NODE
                runner = runner.left
            }
        }
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) { }
    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */

    // ------------------- THRUSDAY --------------------------//
    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
    */

    toArrInorder(node = this.root, vals = []) {
        // RECRUSIVE FUNCTION
        // CHECK TO SEE IF NODE EXISTS
        if (node !== null) {
            // RECURSIVE CALL TO LEFT SIDE
            this.toArrInorder(node.left, vals)
            // PUSH THE NODE DATA INTO ARRAY
            vals.push(node.data)
            // RECURSIVE CALL TO RIGHT SIDE
            this.toArrInorder(node.right, vals)
        }
        // RETURN ARRAY OF NUMBERS
        return vals;
    }

    // ------------------- FRIDAY --------------------------//
    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
        // BASE CASE
        if (node === null) {
            return 0
        }
        return 1 + this.size(node.left) + this.size(node.right)
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {
        // BASE CASE
        if (node === null) {
            return 0
        }
        // COMPARE THE LEFT HEIGHT AND RIGHT HEIGHT
        if (this.height(node.left) > this.height(node.right)) {
            // WHICHEVER HEIGHT IS BIGGER ADD ONE MORE TO THAT HEIGHT
            return 1 + this.height(node.left)
        }
        return 1 + this.height(node.right)    
    }

    /**
     * Determine whether the BST is balanced, for a BST to be balanced,
     * a Node's left and right height must have a max difference of 1 AND
     * all Nodes in the tree must be balanced as well.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree. ???? 
     */
    isBalanced(node = this.root) {
        
        // BASE CASE
        if (node === null) {
            return true;
        }
        if ((this.height(node.left) - this.height(node.right)) <= 1 && (this.height(node.right) - this.height(node.left)) <= 1  &&
        node.left !== null && node.right !== null ) {
                return true; 
        }
        return false; 
    }

        /**
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
        toArrLevelorder(current = this.root) {
            const queue = []
            const vals = []
            // shift - it removes / returns the first element in the array

            if (current != null ) {
                // add the the curent node to the queue
                queue.push(current)
            }
            
            while(queue.length > 0){
              // remove the first element in the queue
                const removedElement = queue.shift()
              // PUSH TO vals THE BST NODE'S VALUE
                vals.push(removedElement.data)
              // IF REMOVED NODE'S LEFT EXISTS
                if (removedElement.left != null ) {
                    // PUSH TO queue THE LEFT OF THE NODE
                    queue.push(removedElement.left)
                }

                // IF REMOVED NODDE'S RIGHT EXISTS
                if (removedElement.right != null) {
                    // PUSH TO queue THE RIGHT OF THE NODE
                    queue.push(removedElement.right)
                }
                
            }
            return vals
        }


}

// TEST CASES 
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
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

// console.log(threeLevelTree.min())
// console.log(threeLevelTree.max())
// console.log('~~~~~~~~~')
// // console.log(contains(6));
// console.log(threeLevelTree.containsRecursive(12))
// threeLevelTree.print()

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
// console.log(fullTree.toArrInorder());
// console.log('~~~~~~~~~')
// console.log(threeLevelTree.height());
// console.log(fullTree.height());
// console.log('~~~~~~~~~')
// console.log(threeLevelTree.isBalanced());
// console.log(fullTree.isBalanced());

console.log(fullTree.toArrLevelorder());

