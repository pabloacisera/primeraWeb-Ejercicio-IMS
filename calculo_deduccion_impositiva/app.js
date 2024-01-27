// Obtener referencias a los elementos HTML
const ingreso = document.getElementById("valor");
const boton = document.querySelector('.calcular');
const resultado = document.getElementById('resultado');
const observacion = document.querySelector('.observaciones');

// Agregar un evento click al botón que llame a la función calcularYDevolver
boton.addEventListener('click', function() {
    // Convertir el valor del input a un número dentro del evento click
    let numVerificado = parseInt(ingreso.value);

    // Verificar la condición y realizar acciones en consecuencia
    if (numVerificado <= 15000) {
        observacion.innerText = "Observaciones: EL MONTO DE LA COMPRA NO ALCANZA EL MÍNIMO REQUERIDO PARA OBTENER ESTE BENEFICIO";
        resultado.innerText = "$";
    } else {
        calcularYDevolver(numVerificado);
    }
});

// Definir la función de cálculo y devolución
function calcularYDevolver(numVerificado) {
    let nuevoResultado = numVerificado * 25 / 100;
    let saldo = numVerificado - nuevoResultado;

    resultado.innerText = nuevoResultado;
    observacion.innerText = "Su saldo es: $" + saldo;
}
