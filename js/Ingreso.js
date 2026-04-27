

class Ingreso {
    constructor(descripcion, valor) {
        this.id = Math.random();
        this.descripcion = descripcion;
        this.valor = valor;
    }

    // Getter de id (sin setter porque no debe modificarse)
    get id() {
        return this._id;
    }
}


