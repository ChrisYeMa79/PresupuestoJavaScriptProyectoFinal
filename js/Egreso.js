import Dato from './Dato.js';

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

export default Egreso;

const cargarEgresos = () => {
    let egresosHTML = '';

    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }

    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    ${formatoMoneda(egreso.valor)}
                </div>
                <div class="elemento_porcentaje">
                    ${formatoPorcentaje(egreso.valor / totalIngresos())}
                </div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn" onclick="eliminarEgreso(${egreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return egresoHTML;
};

let egresos = [
    { id: 1, descripcion: 'Renta', valor: 900 },
    { id: 2, descripcion: 'Ropa', valor: 400 },
    { id: 3, descripcion: 'Comida', valor: 300 }
];

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);

    egresos.splice(indiceEliminar, 1);

    cargarCabecero();
    cargarEgresos();
};

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};