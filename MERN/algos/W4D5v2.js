
// Construct a class called Node.
class Node {
    // The Node class should have two attributes data (this is where values will be stored, data  can be any data type),
    // and next (this is going to represent an instance of the Node class).
      constructor(data){
    // data attribute should be declared upon creation. (passed in through the constructor)
        this.data = data;
    // next attribute should be default to null, (not passed in through the constructor)
        this.next = null;
      }
    }
    
    // after constructing the class make three instances of Nodes, every new Node after the first that is created should be tied to the Node created before it.
    
    const newNode1 = new Node("whatever")
    const newNode2 = new Node(60)
    newNode1.next = newNode2
    const newNode3 = new Node("third Node")
    newNode2.next = newNode3
    
    
    
    console.log(newNode1)
    