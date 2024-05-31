class Libro {
    constructor(nombre, isbn, autor, editorial) {
        this.nombre = nombre;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
    }
}

class LibroStack {
    constructor() {
        this.stack = [];
    }

    push(libro) {
        this.stack.push(libro);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length
    }
}

// Datos de ejemplo
const libro1 = new Libro("Python Programming", "978-1-111-52610-0", "John Smith", "TechBooks Inc.");
const libro2 = new Libro("Data Structures and Algorithms", "978-1-222-33344-0", "Alice Johnson", "CodePress");
const libro3 = new Libro("Machine Learning Basics", "978-3-444-55566-0", "David Miller", "AI Pub");

// Creando un stack y llenadnolo con los datos de ejemplo antes mencionados
const libroStack = new LibroStack();
libroStack.push(libro1);
libroStack.push(libro2);
libroStack.push(libro3);

// probando las operaciones de Stack
console.log("El libro mas arriba en el stack:");
const topLibro = libroStack.peek();
if (topLibro) {
    console.log(`Nombre: ${topLibro.nombre}, ISBN: ${topLibro.isbn}, Autor: ${topLibro.autor}, Editorial: ${topLibro.editorial}`);
}

console.log("\nPopping one book from the stack:");
const poppedBook = libroStack.pop();
if (poppedBook) {
    console.log(`Popped: ${poppedBook.nombre}`);
}

console.log("\nActualizar el top libro del stack:");
const updatedTopLibro = libroStack.peek();
if (updatedTopLibro) {
    console.log(`Nombre: ${updatedTopLibro.nombre}, ISBN: ${updatedTopLibro.isbn}, Autor: ${updatedTopLibro.autor}, Editorial: ${updatedTopLibro.editorial}`);
}

console.log("\nLibros restantes en el stack:");
while (!libroStack.isEmpty()) {
    const libro = libroStack.pop();
    if (libro) {
        console.log(`Nombre: ${libro.nombre}, ISBN: ${libro.isbn}, Autor: ${libro.autor}, Editorial: ${libro.editorial}`);
    }
}