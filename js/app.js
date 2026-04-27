// =====================
// ARREGLOS PRINCIPALES
// =====================

let ingresos = [
    { id: 1, descripcion: 'Salario', valor: 20000 },
    { id: 2, descripcion: 'Venta auto', valor: 50000 }
];

let egresos = [
    { id: 1, descripcion: 'Renta', valor: 9000 },
    { id: 2, descripcion: 'Comida', valor: 3000 }
];


// =====================
// FUNCIONES DE FORMATO
// =====================

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


// =====================
// FUNCIONES DE CÁLCULO
// =====================

const totalIngresos = () => {
    let total = 0;
    for (let ingreso of ingresos) {
        total += ingreso.valor;
    }
    return total;
};

const totalEgresos = () => {
    let total = 0;
    for (let egreso of egresos) {
        total += egreso.valor;
    }
    return total;
};


// =====================
// CABECERO
// =====================

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();

    let porcentajeEgreso = totalIngresos() > 0
        ? totalEgresos() / totalIngresos()
        : 0;

    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
};


// =====================
// INGRESOS
// =====================

const crearIngresoHTML = (ingreso) => {
    return `
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
};

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
};

const eliminarIngreso = (id) => {
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
};


// =====================
// EGRESOS
// =====================

const crearEgresoHTML = (egreso) => {
    return `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">
                    ${formatoMoneda(egreso.valor)}
                </div>
                <div class="elemento_porcentaje">
                    ${totalIngresos() > 0 
                        ? formatoPorcentaje(egreso.valor / totalIngresos()) 
                        : '0%'}
                </div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar_btn" onclick="eliminarEgreso(${egreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
};

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
};

const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
};


// =====================
// FORMULARIO
// =====================

const agregarDato = () => {
    const forma = document.getElementById('forma');

    const tipo = forma['tipo'].value;
    const descripcion = forma['descripcion'].value;
    const valor = forma['valor'].value;

    if (descripcion !== '' && valor !== '') {

        if (tipo === 'ingreso') {
            ingresos.push({
                id: ingresos.length + 1,
                descripcion: descripcion,
                valor: Number(valor)
            });
            cargarIngresos();

        } else if (tipo === 'egreso') {
            egresos.push({
                id: egresos.length + 1,
                descripcion: descripcion,
                valor: Number(valor)
            });
            cargarEgresos();
        }

        cargarCabecero();
        forma.reset();
    }
};


// =====================
// APP
// =====================

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
};