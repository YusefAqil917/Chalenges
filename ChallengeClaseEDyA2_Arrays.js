//  Funcion Regular
function revisarParImparRegular(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
}

// Funcion Arrow
const revisarParImparOArrow = (numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} es par`);
    } else {
        console.log(`${numero} es impar`);
    }
};

// ejemplo de uso 
revisarParImparOArrow(5); // Output: 5 es impar
revisarParImparRegular(8); // Output: 8 es par
