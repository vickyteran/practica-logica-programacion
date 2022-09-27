// let x = 8;
// let y = 10;

// let suma = x + y;
// let promedio = suma / 2;

// document.write("El promedio es : " + promedio);

// let TF = 70
// let resta = TF-32
// let division = 5 / 9
// let multiplicacion = resta * division

// let TC = multiplicacion;

// document.write("<br>" + TC);

// const cambioDeMedidor = (TF) => {
//   let resta = TF - 32;
//   let division = 5 / 9;
//   let multiplicacion = resta * division;
//   let TC = multiplicacion;

//   document.write(
//     `<br><br>${TF}º Fahrenheit es igual a ${TC} grados Celcious<br>`
//   );
// };

// cambioDeMedidor(75);

// alert("Ingrese los lados del rectangulo");
// const base = prompt("base");
// const altura = prompt("altura");

// let basex2 = base * 2
// let alturax2 = altura * 2
// const perimetro = parseInt(basex2) + parseInt(alturax2)
// let superficie = base * altura;

// document.write(
//   `La base del rectangulo es : ${base} y su altura es : ${altura}, el perimetro: ${perimetro}, y la superficie es :${superficie}<br>`
// );

// tarea 2
// 1
// let num1 = 8
// let num2 = 10

// if(num1 > num2) {
//     document.write (num1)
// }else {
//     (document.write(num2))
// }

// 2
// const triangulo = (val1,val2,val3) => {
//     if(val1==val2 && val2==val3) {
//         document.write ("<br>Son valores de un triangulo equilatero")
//     }else {
//         document.write ("<br>No son valores de un tirangulo equilatero")
//     }
// }

// triangulo(5,5,5)

// 3
// let num1 = prompt("ingrese el primer numero")
// let num2 = prompt("ingrese el segundo numero")

// if (num1 > num2) {
//     document.write( "<br> "+ num1 + "<br> " + num2)
// }else if (num2 > num1) {
//     document.write( "<br> " + num2 + "<br> " + num1)
// }else{
//     document.write(" <br> son iguales")
// }

// tarea 3
// 1
// let i = 0;
// let total = 0;
// while (i < 5){
//     let num = prompt ("ingrese un numero");
//     let numero = parseInt(num);
//     total = total + numero;
//     i = i + 1;
// }
// let promedio = total / 5;
// document.write(promedio)


// 2

// let i = 0;
// let numPositivos = 0;
// let numNegativos = 0;
// let cero = 0;
// while (i < 10){
//     let numero = prompt ("ingrese un numero");
//     let num = parseInt(numero);
//     if (num > 0) {
//         numPositivos = numPositivos + 1;
//     } else if (num < 0){
//         numNegativos = numNegativos + 1;
//     } else {
//         cero = cero + 1;
//     }
//     i = i + 1;
// }
// document.write(`Hay ${numPositivos} numeros positivos, ${numNegativos} numeros negativos, y ${cero} ceros`)


// tarea 4
// 1 del video

// let N = prompt("ingrese la cantidad de numeros a analizar")
// let x = prompt("ingrese el numero a comparar")
// const numeros = [];

// for(let i=0; i<N; i++) {

//  numeros[i] = prompt("ingrese los numeros a comparar");

// };

// console.log(numeros)

// for(let i=0; i<N; i++) {
//     let total = 0
//     if(numeros[i] == x) {
//         total++;
//     } 
//     document.write(total)
//     };

// 2 del video

// let x = prompt("ingrese un numero de 4 cifras o más");
// let cifras = x.length


//   console.log(cifras);
 

//   const array = [];
//   for(let i = 0; i<cifras; i++) {
//     array[i] = x.charAt(i);

//   }
//   arrayInvertido = array.reverse()
//   console.log(arrayInvertido)
//   document.write(`El array es ${arrayInvertido} y el orden es ${cifras}`)

//   1 de los ejercicios

let N = prompt("ingrese la cantidad de numeros a analizar");
const array = []

for (let i = 0; i<N; i++) {
array[i] = prompt("ingrese los numeros a analizar");
};

console.log(array)

let numerosP = 0;
let numerosN = 0;
let cero = 0;

for (let i = 0; i<N; i++) {
    if(array[i] > 0) {
numerosP = numerosP + 1
    } else if(array[i] < 0) {
numerosN++;
    } else{
        cero++;
    };
    };

    document.write(`Hay ${numerosP} numeros positivos, ${numerosN} numeros negativos, y ${cero} ceros`)
  