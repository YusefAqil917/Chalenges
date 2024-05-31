class Node {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(nombre, edad, ciudad) {
        if (!this.nodes[nombre]) {
            this.nodes[nombre] = new Node(nombre, edad, ciudad);
        } else {
            console.log(`Node con nombre ${nombre} ya existe.`);
        }
    }

    addCiudad(nombreCiudad) {
        if (!this.nodes[nombreCiudad]) {
            this.nodes[nombreCiudad] = { isCiudad: true, nombre: nombreCiudad };
        } else {
            console.log(`Ciudad con nombre ${nombreCiudad} ya existe.`);
        }
    }

    addAmigoACiudad(nombreAmigo, nombreCiudad) {
        if (this.nodes[nombreAmigo] && this.nodes[nombreCiudad]) {
            this.nodes[nombreAmigo].ciudad = nombreCiudad;
        } else {
            console.log("Amigo o ciudad no existe.");
        }
    }

    getPersonasEnCiudad(nombreCiudad) {
        const personasEnCiudad = [];
        for (const node in this.nodes) {
            if (!this.nodes[node].isCity && this.nodes[node].city === nombreCiudad) {
                personasEnCiudad.push(this.nodes[node].name);
            }
        }
        return personasEnCiudad;
    }
}

// Ejemplo de uso
const graph = new Graph();

// Add nodes (personas)
graph.addNode("Alice", 30, "New York");
graph.addNode("Bob", 25, "Los Angeles");
graph.addNode("Charlie", 35, "New York");

// Add ciudad nodes
graph.addCiudad("New York");
graph.addCiudad("Los Angeles");

// Add amigos a ciudades
graph.addAmigoACiudad("Alice", "New York");
graph.addAmigoACiudad("Bob", "Los Angeles");
graph.addAmigoACiudad("Charlie", "New York");

// Print personas en una ciudad en especifico
console.log(graph.getPersonasEnCiudad("New York")); // Output: ["Alice", "Charlie"]
