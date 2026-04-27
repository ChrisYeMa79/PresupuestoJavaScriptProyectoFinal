class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
    }

    // Getter de descripción
    get descripcion() {
        return this._descripcion;
    }

    // Setter de descripción
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    // Getter de valor
    get valor() {
        return this._valor;
    }

    // Setter de valor
    set valor(valor) {
        this._valor = valor;
    }
}

export default Dato;