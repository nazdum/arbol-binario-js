const ArbolBinario = require("./Arbol.js");

const arbol = new ArbolBinario();
let numeros = [7, 9, 3, 4, 6, 5, 1, 2, 0, 8];


numeros.forEach(numero => {
    arbol.insertar(numero);
});

arbol.enOrden(arbol.raiz);

console.log(arbol.path);

