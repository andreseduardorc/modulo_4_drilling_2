const btnMostrarRutina = document.querySelector('.btn-primary');
btnMostrarRutina.addEventListener('click', generarRutina);

function* generarEntrenamiento(duracion) {
  const ejercicios = ['sentadillas', 'bancos', 'peso muerto', 'prensas'];

  let ejercicioIndex = 0;
  for (let i = 0; i < duracion; i++) {
    const dia = i + 1;
    const ejercicio = ejercicios[ejercicioIndex];
    ejercicioIndex = (ejercicioIndex + 1) % ejercicios.length;

    yield `Día ${dia}: ${ejercicio}`;
  }
}

function generarRutina() {
  const semanas = parseInt(document.querySelector('.col-6 input:nth-of-type(1)').value);
  const diasPorSemana = parseInt(document.querySelector('.col-6 input:nth-of-type(2)').value);

  if (!isNaN(semanas) && !isNaN(diasPorSemana)) {
    const totalDias = semanas * diasPorSemana;
    const rutinaGenerator = generarEntrenamiento(totalDias);

    for (let i = 0; i < totalDias; i++) {
      const entrenamiento = rutinaGenerator.next().value;
      console.log(entrenamiento);
    }
  } else {
    console.log('Por favor, ingresa valores numéricos válidos.');
  }
}
