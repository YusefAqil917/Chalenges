class Person {
    constructor(fullName, birthdate) {
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

class FamilyTree {
    constructor(root) {
        this.root = root;
    }

    preOrderTraversal(node) {
        if (!node) return;

        console.log(node.fullName);
        node.children.forEach(child => this.preOrderTraversal(child));
    }

    postOrderTraversal(node) {
        if (!node) return;

        node.children.forEach(child => this.postOrderTraversal(child));
        console.log(node.fullName);
    }

    inOrderTraversal(node) {
        if (!node) return;

        if (node.children.length > 1) {
            this.inOrderTraversal(node.children[0]);
            console.log(node.fullName);
            for (let i = 1; i < node.children.length; i++) {
                this.inOrderTraversal(node.children[i]);
            }
        } else {
            console.log(node.fullName);
            node.children.forEach(child => this.inOrderTraversal(child));
        }
    }
}

// Create people
const greatGrandfather = new Person("John Smith", "January 1, 1900");
const greatGrandmother = new Person("Mary Smith", "February 2, 1900");

const grandfather = new Person("Robert Smith", "March 3, 1920");
grandfather.addChild(new Person("Alice Smith", "April 4, 1925"));
grandfather.addChild(new Person("David Smith", "May 5, 1930"));

const grandmother = new Person("Emily Smith", "June 6, 1922");
grandmother.addChild(new Person("Eva Smith", "July 7, 1927"));
grandmother.addChild(new Person("Frank Smith", "August 8, 1932"));

// Connect family tree
greatGrandfather.addChild(grandfather);
greatGrandmother.addChild(grandmother);

const familyTree = new FamilyTree(greatGrandfather);

console.log("Pre-order Traversal:");
familyTree.preOrderTraversal(greatGrandfather);
console.log("\nPost-order Traversal:");
familyTree.postOrderTraversal(greatGrandfather);
console.log("\nIn-order Traversal:");
familyTree.inOrderTraversal(greatGrandfather);
