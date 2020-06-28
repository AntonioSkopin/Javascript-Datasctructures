class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    // Method to set a link to the next node
    setNextNode(node) {
        // Checks if passed in node is not an instance of Node
        if (!(node instanceof Node)) {
            throw new Error("Next node must be a member of the Node class.");
        }
        this.next = node; // Set the link to the next node
    }

    // Method to get the next node
    getNextNode() {
        return this.next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the head of the linked list
    addToHead(data) {
        const newHead = new Node(data); // Creates a new node with passed in value
        const currentHead = this.head; // Stores current head
        this.head = newHead;

        // Checks if there is a head
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    // Method to add a node to the tail
    addToTail(data) {
        let tail = this.head; // Set tail as the head of the list
        if (!tail) { // Check if there isn't a tail
            this.head = new Node(data); // Create a new head with parameter
        } else {
            // While tail doesn't have a next Node assign tail to the nextNode
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            // Create a new node after the tail
            tail.setNextNode(new Node(data));
        }
    }

    // Method to remove the head
    removeHead() {
        const removedHead = this.head; // Set removedHead to the current head
        if (!removedHead) { // Check if there isn't a head
            return; // Stop method
        }
        this.head = removedHead.getNextNode(); // Set current head to the next node
        return removedHead.data; // Get the data of the removed head
    }

    // Method to remove a node with a specific value
    removeNode(data) {
        let headNode = this.head; // Store head node

        if (headNode !== null) {
            if (headNode.data == data) { // If head node holds the data to be deleted
                this.head = headNode.getNextNode();
                headNode = null;
                return;
            }
        }

        while (headNode !== null) { // Search for the data to be deleted
            if (headNode.data == data) {
                break;
            }
            let lastNode = headNode;
            headNode = headNode.getNextNode();
        }

        if (headNode == null) { // If data was not present in linked list
            return;
        }

        // Unlink the node from the LinkedList
        lastNode.getNextNode() = headNode.getNextNode();
        headNode = null;
    }

    // Method to print the LinkedList data
    printList() {
        let currentNode = this.head; // Set currentNode to the head
        let output = '<head> '; // Output message
        while (currentNode !== null) { // Run while there isn't a currentNode
            output += currentNode.data + ' '; // Add data of currentNode to the message
            currentNode = currentNode.getNextNode(); // Set currentNode to the following Node
        }
        output += '<tail>';
        console.log(output); // Output list data
    }
}