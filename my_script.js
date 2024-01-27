const peso = document.querySelector('.peso');
const altura = document.querySelector('.altura');
const boton = document.querySelector('.calcular');
const resultado = document.querySelector('.consejo');
const nuevoTexto = document.querySelector('.text');

let calculoMasa = function () {
    let input_peso = parseFloat(peso.value);
    let input_altura = parseFloat(altura.value);

    let alturaAlCuadrado = Math.pow(input_altura, 2);
    let resultadoCalculo = input_peso / alturaAlCuadrado;

    resultado.innerHTML = 'Resultado: ' + resultadoCalculo.toFixed(1);
    clasificacion(resultadoCalculo);
}

let clasificacion = function (resultadoCalculo) {
    // ... (Tu lógica de clasificación)
    if (resultadoCalculo < 18.5) {
        nuevoTexto.innerHTML = 'Bajo Peso: consultar con un Profesional de la Salud: Es crucial identificar la causa del bajo peso, ya que puede estar relacionado con problemas médicos, nutricionales o psicológicos. Un médico o nutricionista puede evaluar tu situación y proporcionar orientación personalizada. Dieta Balanceada y Nutrientes Esenciales: Se puede recomendar una dieta rica en nutrientes esenciales para promover un aumento de peso saludable. Esto puede incluir alimentos con proteínas, grasas saludables y carbohidratos complejos. Supervisión Médica Regular: Para aquellos con bajo peso, es importante tener un seguimiento médico regular para evaluar el progreso y ajustar las recomendaciones según sea necesario.';
    } else if (resultadoCalculo >= 18.5 && resultadoCalculo <= 24.9) {
        nuevoTexto.innerHTML = 'Peso Normal: Mantenimiento de un Estilo de Vida Saludable, continúa con hábitos saludables, incluyendo una dieta equilibrada y actividad física regular.   Variedad en la Dieta: Asegúrate de incluir una variedad de alimentos en tu dieta para obtener todos los nutrientes esenciales. Esto puede incluir frutas, verduras, granos enteros, proteínas magras y grasas saludables. Ejercicio Moderado: Mantén una rutina de ejercicio moderado que se adapte a tu nivel de condición física y preferencias.';
    } else if (resultadoCalculo >= 25 && resultadoCalculo <= 29.9) {
        nuevoTexto.innerHTML = 'Sobrepeso: Cambios en la Dieta: Adopta un enfoque sostenible hacia la pérdida de peso mediante la reducción del consumo de alimentos procesados, azúcares agregados y grasas saturadas. Opta por porciones adecuadas y alimentos nutritivos.        Incremento en la Actividad Física: Aumenta gradualmente la actividad física, como caminar, correr, nadar o practicar deportes. Consulta con un entrenador personal o fisioterapeuta para un plan de ejercicios adaptado a tus necesidades y limitaciones. Apoyo Profesional: Busca el apoyo de profesionales de la salud, como nutricionistas o entrenadores, para recibir orientación específica y mantener una pérdida de peso saludable.';
    } else if (resultadoCalculo >= 30 && resultadoCalculo <= 42.5) {
        nuevoTexto.innerHTML = 'Obesidad: Enfoque Multidisciplinario: La obesidad a menudo requiere un enfoque multidisciplinario que incluya cambios en la dieta, actividad física y posiblemente tratamiento médico. Psicología y Salud Mental: Aborda los aspectos emocionales y psicológicos asociados con la alimentación. La terapia cognitivo-conductual puede ser útil para cambiar patrones de comportamiento alimenticio. Evaluación Médica Completa: Un equipo médico puede evaluar posibles condiciones subyacentes que contribuyen a la obesidad y brindar orientación sobre opciones de tratamiento. Establecimiento de Metas Realistas: Establece metas de pérdida de peso realistas y sostenibles. Un enfoque gradual es más efectivo y duradero que las soluciones rápidas.';
    }
}

boton.addEventListener('click', calculoMasa);
