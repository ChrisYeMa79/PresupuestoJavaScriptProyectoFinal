// Función para calcular total de ingresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor; // ajusta "valor" según tu objeto
    }
    return totalIngreso;
};

// Función para calcular total de egresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let i = 0; i < egresos.length; i++) {
        totalEgreso += egresos[i].valor; // ajusta "valor" según tu objeto
    }
    return totalEgreso;
};

// Función cargarCabecero
const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    console.log("Presupuesto:", presupuesto);
    console.log("Porcentaje de egreso:", porcentajeEgreso);
};

    
