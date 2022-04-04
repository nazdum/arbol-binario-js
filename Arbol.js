const Nodo = require('./Nodo')

module.exports = class ArbolBinario {
    constructor() {
        this.raiz = null;
        this.path = [];
    }

    /**
    @param {Nodo} nodo
    */
    insertar(valor) {
        let nuevoNodo = new Nodo(valor);

        if (!this.raiz) {
            this.raiz = nuevoNodo
        } else {
            this.insertarNodo(this.raiz, nuevoNodo);
        }

    }

    /**
     * 
     * @param {Nodo} nodo //raiz
     * @param {Nodo} nuevoNodo 
     */
    insertarNodo(nodo, nuevoNodo) {

        if (nuevoNodo.valor < nodo.valor) {
            if (!nodo.izquierda) {
                nodo.izquierda = nuevoNodo;
            } else {
                this.insertarNodo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (!nodo.derecha) {
                nodo.derecha = nuevoNodo;
            } else {
                this.insertarNodo(nodo.derecha, nuevoNodo);
            }
        }

    }

    /**
     * 
     * @param {Nodo} node 
     * @returns 
     */
    enOrden(node) {

        if (node !== null) {
            this.enOrden(node.izquierda);
            this.path.push(node.valor);
            this.enOrden(node.derecha);
        }
        return this.path;
    }

}