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

function sonValidosDatos (datosArray, limite = datosArray.length) {
  if (datosArray.length < limite) {
    return false
  }
  for (let i = 0; i < datosArray.length; i++) {
    if (!esNumeroString(datosArray[i])) {
      return false
    }
  }
  return true
}

function startExercise3 () {
  const mensajeEL = document.querySelector('#r_ej3')
  const numerosString = window.prompt('Dime cuatro números separados por comas')
  if (numerosString === null) return // Acción cancelada

  // split es un métod que convierte string en array utilizando un delimitador
  const n = numerosString.split(',')

  if (!sonValidosDatos(n, 4)) {
    mensajeEL.innerHTML = `Entrada de datos [${numerosString}]. Faltan números o formato numérico no válido`
    return null
  }

  mensajeEL.innerHTML = `<br>${n[0]}+${n[1]}=${Number(n[0]) + Number(n[1])}<br>
  ${n[2]}*${n[3]}=${Number(n[2]) * Number(n[3])}`
}

document.querySelector('#b_ej3').addEventListener('click', startExercise3)

function startExercise4 () {
  const mensajeEL = document.querySelector('#r_ej4')
  const numerosString = window.prompt('Dime cuatro números separados por comas')
  if (numerosString === null) return // Acción cancelada

  // split es un métod que convierte string en array utilizando un delimitador
  const n = numerosString.split(',')

  if (!sonValidosDatos(n, 4)) {
    mensajeEL.innerHTML = `Entrada de datos [${numerosString}]. Faltan números o formato numérico no válido`
    return null
  }

  const resultSuma = n.reduce((ac, valorActual) => {
    return ac + Number(valorActual)
  }, 0)

  const resultProducto = n.reduce((ac, valorActual) => {
    return ac * Number(valorActual)
  }, 1)

  mensajeEL.innerHTML = `<br>${n.join('+')} = ${resultSuma}<br>
  ${n.join('*')} = ${resultProducto}`
}

document.querySelector('#b_ej4').addEventListener('click', startExercise4)

function startExercise5 () {
  const mensajeEL = document.querySelector('#r_ej5')
  const numerosString = window.prompt('Dime cuatro números separados por comas')
  if (numerosString === null) return // Acción cancelada

  // split es un métod que convierte string en array utilizando un delimitador
  const numeros = numerosString.split(',')

  if (!sonValidosDatos(numeros, 4)) {
    mensajeEL.innerHTML = `Entrada de datos [${numerosString}]. Faltan números o formato numérico no válido`
    return null
  }

  // Son enteros
  for (let i = 0; i < numeros.length; i++) {
    if (!Number.isInteger(Number(numeros[i]))) {
      mensajeEL.innerHTML = `Entrada de datos [${numerosString}]. No se adminten valores decimales`
      return null
    }
  }

  const numerosToNumber = numeros.map((value) => {
    return Number(value)
  })

  let pos = 0
  let neg = 0
  let zer = 0

  for (let i = 0; i < numerosToNumber.length; i++) {
    if (numerosToNumber[i] > 0) pos++
    else if (numerosToNumber[i] < 0) neg++
    else zer++
  }

  mensajeEL.innerHTML = `[${numerosString}]: Positives:${pos}, Negatives: ${neg}, Zeros: ${zer}` // << 'Positives:' 1 'Negatives:' 1 'Zeros:'
}

document.querySelector('#b_ej5').addEventListener('click', startExercise5)

// 6
document.querySelector('#b_ej6').addEventListener('click', edad)

function edad () {
  let edad = window.prompt('Tu edad:')
  if (edad === null) return
  edad = Number(edad)
  if (edad >= 18) {
    window.alert('Puedes conducir')
  } else {
    window.alert('No puedes conducir')
  }
}

function verificarCadena (cadena) {
  if (cadena === '') {
    window.alert('DEBES INTRODUCIR UN VALOR')
    throw new Error('ERROR!')
  } else if (isNaN(cadena)) {
    window.alert('DEBES INTRODUCIR UN NUMERO')
    throw new Error('ERROR!')
  } else return Number(cadena)
}

function ex7 () {
  const nota = verificarCadena(window.prompt('DAME UNA NOTA'))
  const caja = document.querySelector('#r_ej7')

  if (nota >= 0 && nota < 3) caja.textContent = `NOTA ${nota} = MUY DEFIFICIENTE`
  else if (nota >= 3 && nota < 5) caja.textContent = `NOTA ${nota} = INSUFICIENTE`
  else if (nota >= 5 && nota < 6) caja.textContent = `NOTA ${nota} = SUFICIENTE`
  else if (nota >= 6 && nota < 7) caja.textContent = `NOTA ${nota} = BIEN`
  else if (nota >= 7 && nota < 9) caja.textContent = `NOTA ${nota} = NOTABLE`
  else if (nota >= 9 && nota <= 10) caja.textContent = `NOTA ${nota} = SOBRESALIENTE`
  else caja.textContent = `NOTA ${nota} NO VALIDA`
}

document.querySelector('#b_ej7').addEventListener('click', ex7)
