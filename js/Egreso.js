

class Egreso extends Dato {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor); // Llamada al constructor padre
        this._id = ++Egreso.contadorEgresos; // Preincremento para iniciar en 1
    }

    // Getter de id (sin setter)
    get id() {
        return this._id;
    }
}


