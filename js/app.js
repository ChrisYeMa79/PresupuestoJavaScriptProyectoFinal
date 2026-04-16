// Arreglos de prueba
let ingresos = [9000, 400];
let egresos = [900, 400];

// Función totalIngresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso;
    }
    return totalIngreso;
};

// Función totalEgresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso;
    }
    return totalEgreso;
};

// Función cargarCabecero
const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(totalIngresos());
    console.log(totalEgresos());
};

// Ejecutar
cargarCabecero();

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
};

console.log(formatoMoneda(8100)); 
// $8,100.00

console.log(formatoPorcentaje(0.1304)); 
// 13.04%