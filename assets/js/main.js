//crear un programa que solicite al usuario un numero de dedos y opción

let dedos = +prompt('indique un numero de dedos (entre 1 y 10)')
let opcion = prompt('indique la opción (par o none)')

if ((dedos >= 1 && dedos <= 10) && (opcion == 'par' || opcion == 'none')) {
    

    //generamos un numero aleatorio entre 1 y 10 para el jugador 2

    let dedos2 = Math.floor(Math.random() * 10) + 1;
    
    console.log('la opcion de la pc es: ', dedos2)


    //calculamos la suma de los dedos
    let suma = dedos + dedos2
    //comprobar si es par o impar

    let resultado = suma % 2 == 0
        ? 'par'
        : 'none'

    //mostramos el resultado
    alert(`La suma de los dedos es: ${suma} y es ${resultado}`)

    //compramos el resultado con la opcion del jugador 1

    if (resultado == opcion) {
        alert('Tu has ganado')
    } else {
        alert('ha ganado la computadora')
    }






} else {
    alert('Ingrese datos validos')
}