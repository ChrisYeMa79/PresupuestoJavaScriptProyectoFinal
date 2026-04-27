import Ingreso from './Ingreso.js';
import Egreso from './Egreso.js';

// =====================
// Arreglos principales
// =====================
const ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
];

const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];

// =====================
// Función total ingresos
// =====================
const totalIngresos = () => {
    let totalIngresos = 0;

    for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
    }

    return totalIngresos;
};

// =====================
// Función total egresos
// =====================
const totalEgresos = () => {
    let totalEgresos = 0;

    for (let egreso of egresos) {
        totalEgresos += egreso.valor;
    }

    return totalEgresos;
};

// =====================
// Función cargarCabecero
// =====================
const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalIngresos() > 0 
        ? totalEgresos() / totalIngresos() 
        : 0;

    // Actualizar HTML
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);

    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);

    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());

    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
};
const cargarApp = () => {
    cargarCabecero();
};


// Ejecutar prueba
cargarCabecero();

const agregarDato = () => {
    const forma = document.getElementById('forma');

    const tipo = forma['tipo'].value;
    const descripcion = forma['descripcion'].value;
    const valor = forma['valor'].value;

    // Validación
    if (descripcion !== '' && valor !== '') {

        if (tipo === 'ingreso') {
            ingresos.push({
                id: ingresos.length + 1,
                descripcion: descripcion,
                valor: Number(valor)
            });

            cargarCabecero();
            cargarIngresos();

        } else if (tipo === 'egreso') {
            egresos.push({
                id: egresos.length + 1,
                descripcion: descripcion,
                valor: Number(valor)
            });

            cargarCabecero();
            cargarEgresos();
        }
    }
};