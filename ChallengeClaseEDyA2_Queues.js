class Person {
    constructor(nombre, tiempoLlegada) {
        this.nombre = nombre;
        this.tiempoLlegada = tiempoLlegada;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue;
    }
}

// Creando instantes de llegadas de algunas personas y enqueueing a ellos en el queue
const queue = new Queue();
queue.enqueue(new Person("John", new Date())); // Asumiendo que John acabo de llegar al cajero
queue.enqueue(new Person("Alice", new Date())); // Asumiendo que Alice llego despues que John
queue.enqueue(new Person("Bob", new Date())); // Asumiendo que Bob llego despues Alice

// Print el queue
console.log(queue.print());

// ejemplo de dequeuing a una persona
const primeraPerson = queue.dequeue();
console.log("Primera persona:", primeraPerson);

// Peek at the next person in the queue
const siguientePersona = queue.peek();
console.log("siguiente persona:", siguientePersona);

// revisar el queue size
console.log("Tamanio de Queue:", queue.size());

// revisar si el queue esta vacio
console.log("esta el queue vacio?", queue.isEmpty());
