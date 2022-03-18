//1 ----------------------------------------------------------
/*El algoritmo es un proceso ordenado que busca un resultado. Por ejemplo todos los pasos
preestablecidos en una división, a fin de encontrar el resultado correcto.
//2 ----------------------------------------------------------
El psudocodigo es la forma sencilla de explicar uno o varios algoritmos a fin de simplificar la comprension
del proceso completo. Un ejemplo sería la calculadora que sigue este comentario, donde todos los calculos fueron
resumidos en simples formulas de las que se encargara de resolver la computadora sin que el usuario se moleste.
*/
// >>>>>>>>>3-a --------------------------------------------------------

console.log("3-a");
var selector = parseInt(prompt("Ingrese 1 para rectangulo \n Ingrese 2 para triangulo \n Ingrese 3 para circulo"));
console.log("programa seleccionado " + selector);

if (selector == 1) {
	let base = parseInt(prompt("Ingrese el valor de la base"));
	let altura = parseInt(prompt("Ingrese el valor de la altura"));
let superficie = ((base * altura) / 2);
console.log("La superficie del rectangulo es: " + superficie);
alert("La superficie del rectangulo es de " + superficie);
};

if (selector == 2) {
	let a = parseInt(prompt("Ingrese el lado A"));
	let b = parseInt(prompt("Ingrese el lado B"));
	let c = parseInt(prompt("Ingrese el lado C"));
let superficie = Math.sqrt(((a + b + c) / 2)*(((a + b + c) / 2) - a) * (((a + b + c) / 2 ) - b) * (((a + b + c) / 2) - c));
console.log("La superficie del triangulo es: " + superficie);
alert("La superficie del triangulo es de " + superficie);
};

if (selector == 3) {
	let radio = parseInt(prompt("Ingrese el radio"));
	const pi = 3.141592;
let superficie = pi * (radio * radio);
console.log("La superficie del circulo es: " + superficie);
alert("La superficie del circulo es de " + superficie);
};

// >>>>>>>>>3-b -------------------------------------------------------
console.log("3-b");
var numA = 10;
var numB = 15;
var numC = 20;

var suma = numA + numB + numC;
var producto = numA * numB * numC;
var promedio = (numA + numB + numC) / 3;
console.log("La suma total es de " + suma);
console.log("El producto final es de " + producto);
console.log("El promedio final es de " + promedio);

// >>>>>>>>>>3-c ------------------------------------------------------
console.log("3-c");
var zapatillasNaiq = 60000;
var mediasNaiq = 1000;
var shortNaiq = 5000;
var remeraNaiq = 8000;
var calzoncilloNaiq = 2000;

var totalNaiq = (zapatillasNaiq + mediasNaiq + shortNaiq + remeraNaiq + calzoncilloNaiq);
var conDescuento = (85 * totalNaiq) / 100;

console.log("El valor total es de $" + totalNaiq);
console.log("El valor final con descuento es de $" + conDescuento);

// >>>>>>>>>3-d ------------------------------------------------------
console.log("3-d");
var pesos = 100000;
//Ingresar el valor del dolar
var dolar = 
var conversion = pesos / dolar;
console.log("Con $100.000 te podes comprar: U$S " + conversion);

// >>>>>>>>>3-e -------------------------------------------------------
console.log("3-e");
//Ingrese el monto total aqui
var valorTotal = 

var sinIva = (valorTotal * 100) / 121;
console.log("El valor sin IVA es de: $" + sinIva);