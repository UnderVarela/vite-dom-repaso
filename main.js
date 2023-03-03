import { esNumeroString } from './assets/functions'
import './style.css'

function startExercise1 () {
  const lado = window.prompt('Dame un lado:', '2')
  const response = document.querySelector('#r_eje1')
  if (lado === null) return

  if (esNumeroString(lado) && lado > 0) {
    const ladoNumber = Number(lado)
    response.textContent = `Perímetro (lado: ${lado}): ${ladoNumber * 4}`
  } else {
    response.innerHTML = `<strong style="color: red">Formato de lado (${lado}) no válido</strong>`
  }
}

document.querySelector('#b_ej1').addEventListener('click', startExercise1)

// 2. De un triángulo se tiene la longitud de la base y la longitud de la altura. Determine el valor de su área. Obtener dichos valores a través del prompt(). El programa se lanzará al pulsar sobre el botón
function startExercise2 () {
  const base = window.prompt('Dame base:')
  if (base === null) return
  const altura = window.prompt('Dame altura')
  if (altura === null) return

  const mensajeEL = document.getElementById('r_ej2')
  if ((esNumeroString(base) && base > 0) && (esNumeroString(altura) && altura > 0)) {
    mensajeEL.textContent = `(${base}*${altura}/2) = ${(Number(base) * Number(altura)) / 2}`
  } else {
    mensajeEL.innerHTML = `<strong style="color: white" class="rojo">[base: ${base}, altura: ${altura}]</strong> Formato válido`
  }
}

document.querySelector('#b_ej2').addEventListener('click', startExercise2)
