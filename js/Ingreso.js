import Dato from './Dato.js';

class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor); // Llama al constructor padre
        this._id = ++Ingreso.contadorIngresos; // Preincremento
    }

    // Getter de id (sin setter porque no debe modificarse)
    get id() {
        return this._id;
    }
}

export default Ingreso;

const cargarIngresos = () => {
    let ingresosHTML = '';

    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};


let ingresos = [
    { id: 1, descripcion: 'Salario', valor: 2200 },
    { id: 2, descripcion: 'Venta Coche', valor: 1500 },
    { id: 3, descripcion: 'Freelance', valor: 800 }
];

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    ${formatoMoneda(ingreso.valor)}
                </div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn" onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
};