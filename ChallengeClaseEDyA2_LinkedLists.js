// Define the Todo and TodoList classes
class Todo {
    constructor(title, description, next = null) {
        this.title = title;
        this.description = description;
        this.next = next;
    }
}

class TodoList {
    constructor() {
        this.head = null;
    }

    addTodo(title, description) {
        const newTodo = new Todo(title, description);
        if (!this.head) {
            this.head = newTodo;
        } else {
            let currentTodo = this.head;
            while (currentTodo.next !== null) {
                currentTodo = currentTodo.next;
            }
            currentTodo.next = newTodo;
        }
    }

    printTodos() {
        let currentTodo = this.head;
        while (currentTodo !== null) {
            console.log(`Title: ${currentTodo.title}`);
            console.log(`Description: ${currentTodo.description}`);
            console.log('---------------------');
            currentTodo = currentTodo.next;
        }
    }
}

// Create a new list of TODOs
const todoList = new TodoList();

// Add some tasks
todoList.addTodo("Task 1", "Description of Task 1");
todoList.addTodo("Task 2", "Description of Task 2");
todoList.addTodo("Task 3", "Description of Task 3");

// Print all TODOs
todoList.printTodos();
