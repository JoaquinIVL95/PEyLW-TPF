function calcularCosto() {
    const metrosCuadrados = document.getElementById('metrosCuadrados');
    const metrosCuadradosSemi = document.getElementById('metrosCuadradosSemi');
    const tipoConstruccion = document.getElementById('tipoConstruccion').value;
    const calidadTerminaciones = document.getElementById('calidadTerminaciones').value;
    


    

    let costoBase = 0;

    if(metrosCuadrados.value <= 0 || isNaN(metrosCuadrados.value)){
        metrosCuadrados.style.borderColor = "red";
    }else{
        metrosCuadrados.style.borderColor = "green";
    }

    if(metrosCuadradosSemi.value <= 0 || isNaN(metrosCuadradosSemi.value)){
        metrosCuadradosSemi.style.borderColor = "red";
    }else{
        metrosCuadradosSemi.style.borderColor = "green";
    }

    switch(tipoConstruccion) {
        case 'residencial':
            costoBase = 1000;
            break;
        case 'comercial':
            costoBase = 800;
            break;
        case 'industrial':
            costoBase = 1200;
            break;
    }

    let factorCalidad = 1;

    switch(calidadTerminaciones) {
        case 'baja':
            factorCalidad = 1;
            break;
        case 'media':
            factorCalidad = 1.2;
            break;
        case 'alta':
            factorCalidad = 1.5;
            break;
    }
    const sumam2 = parseInt(metrosCuadrados.value) + parseInt(metrosCuadradosSemi.value)
    const m2Totales = sumam2;
    const costoTotalFinal = m2Totales * costoBase * factorCalidad;
    
    const resultado = document.getElementById('resultado')
    resultado.innerText = `Costo Total: U$D ${costoTotalFinal}`;
    resultado.style.fontSize = '25px'
    resultado.style.paddingBottom = '15px'
}


function calcularTasacion() {
    let precio1 = parseInt(document.getElementById('precio1').value);
    let metros1 = parseInt(document.getElementById('metros1').value);
    let precio2 = parseInt(document.getElementById('precio2').value);
    let metros2 = parseInt(document.getElementById('metros2').value);
    
    let isValid = true;
    isValid = validarNumero(precio1, 'precio1');
    isValid = validarNumero(metros1, 'metros1');
    isValid = validarNumero(precio2, 'precio2');
    isValid = validarNumero(metros2, 'metros2');
    
    if (!isValid) {
        document.getElementById('resultadoTasacion').innerText = 'Por favor, ingrese valores mayores a cero en los campos marcados en rojo.';
        return;
    }

    let precioxmetro1 = calcularPrecioxM(precio1, metros1);
    let precioxmetro2 = calcularPrecioxM(precio2, metros2);

    let precioPromedioXMetro = (precioxmetro1 + precioxmetro2) / 2;

    let mt2PropComparar = parseInt(document.getElementById('propComparar').value);
    let estadoPropComparar = document.getElementById('estadoProp').value;

    isValid = validarNumero(mt2PropComparar, 'propComparar') ;

    if (!isValid) {
        document.getElementById('resultadoTasacion').innerText = 'Por favor, ingrese valores mayores a cero en los campos marcados en rojo.';
        return;
    }

    let factorEstadoProp;
    switch (estadoPropComparar) {
        case 'excelente':
            factorEstadoProp = 1.0;
            break;
        case 'buena':
            factorEstadoProp = 0.9;
            break;
        case 'mala':
            factorEstadoProp = 0.8;
            break;
        default:
            factorEstadoProp = 1.0;
    }

    let precioEstimado = precioPromedioXMetro * mt2PropComparar * factorEstadoProp;
    
    const resultadoTasacion = document.getElementById('resultadoTasacion');
    resultadoTasacion.innerText = `Precio estimado de la propiedad: U$D ${precioEstimado.toFixed(2)}`;
    resultadoTasacion.style.fontSize = '25px';
    resultadoTasacion.style.paddingBottom = '15px';
}

function calcularPrecioxM(precio, metros) {
    return precio / metros;
}

function validarNumero(valor, id) {
    const element = document.getElementById(id);
    if (valor <= 0 || isNaN(valor)) {
        element.style.borderColor = "red";
        return false;
    } else {
        element.style.borderColor = "green";
        return true;
    }
}


