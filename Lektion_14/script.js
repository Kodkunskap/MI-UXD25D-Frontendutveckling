
/* 

    Funktioner


    function funktionsNamn(parameter1, parameter2, ...) {
        // Skriva kod som körs när funktionen anropas.

        return true;    // variabel... 
    }


    let svaret = funktionsName(10, "Martin", true);

*/


function max(number1, number2) {
    console.log("number1 =", number1, "number2 =", number2);

    if(number1 > number2) {
        return number1;
    }

    return number2;     // Om inte number1 är störst är number2 det, alternativt att dem är lilka.
}

let tal1 = 72, tal2 = 71;

let biggest = max(tal1, tal2);  // max(72, 71)
console.log("Det största talet av", tal1, "och", tal2, "är", biggest);


function greeting(name) {
    alert(`Hej ${name}, välkommen!`);
}


// greeting("Patrik");
// greeting("Agnes");

/*
    Funktioner kan användas för att återanvända kod.

    DRY - Don't Repeat Yourself

*/

/*
    Föruppgift 14 - Beräkna summor lättar


    let sum=0; 
    for(let i=1; i <= 1000000; i++) {
        sum += i; //sum = sum + i;
    }

 */

function calculateIntervalSum(start, stop) {

    let sum=0; 
    for(let i=start; i <= stop; i++) {
        sum += i; //sum = sum + i;
    }

    return sum;
}

console.log("Summan av talen mellan 1 och 5 är: " + calculateIntervalSum(1, 5)); 
console.log("Summan av talen mellan 1 och 1000000 är: " + calculateIntervalSum(1, 1000000));
console.log("Summan av talen mellan 10 och 15 är: " + calculateIntervalSum(10, 15)); 


let redColorFunction = function() {
    return "Röd";
}

let greenColorFunction = function() {
    return "Green";
}

console.log(redColorFunction());    // Röd

let mysteryFunction = 12;   
mysteryFunction = greenColorFunction;
mysteryFunction = redColorFunction;
console.log(mysteryFunction());     // ? (Röd)  



function reportColorFunction(colorFunction) {

    alert("Color function report: " + colorFunction());     // Viktigt att lägga till () efter variabel som innehåller en funktion - detta betyder att funktionen i variabeln körs/anropas

}


// reportColorFunction(redColorFunction);
// reportColorFunction(greenColorFunction);
// reportColorFunction(function() { 
//     return "Brandgult"; 
// });

//setTimeout(func, delay)
// func - koden som skall köras (dvs en funktion)
// delay - är hur länge vi skall vänta innan koden körs

const DELAY = 10000;    // i ms -> 10s

function showAlert() {
    alert("Äggen färdiga!");
}

// setTimeout(showAlert, DELAY);


// setTimeout(function(){ 
//     console.log("Timer funktion som körs efter 10 sekunder.");


//     console.log("Vi kan ha mycket kod i vår funktion!");
// }, DELAY);

let myTimeoutFunction = function() {
    console.log("Här får vi vår timeout!");
};
//setTimeout(myTimeoutFunction, DELAY);

/*

    Pilfunktion - ett annat (modernare) sätt att skapa anonyma funktioner

    function(param1) {
        param1 = param1 *2 ;
        return param1;
    }

    (param1) => {
        param1 = param1 *2 ;
        return param1;
    } 

*/

setTimeout( () => { 
    console.log("Här får vi vår timeout!"); 
}, DELAY);


/*
    1. Timer - funktion när är klar (gjort några exempel)
    2. Intervall - funktion som körs i intervall (var X - millisekund)
    3. Events - t.ex. knapptryckning i ett formulär, lämnar / tappar fokus från input, skrivit ett tecken i en input
    4. Sortering - hur sorteringen skall fungera
    5. Ramverk - för att bygga dynamiska webbsidor
    6. Web Service - asynkront - kod närs svar från BE kommer
    ....
*/


// let secondsSinceStart = 0; 

// function executeTimer() {
//     setTimeout(() => {
//         secondsSinceStart++;
//         console.log("Seconds from start", secondsSinceStart);
//         executeTimer(); 
//     }, 1000);   // 1000ms == 1s
// }


// setInterval(() => {
//         secondsSinceStart++;
//         console.log("Seconds from start", secondsSinceStart);
// }, 1000);   // 1000ms == 1s


/*
 *      Konvertera från sträng till tal
 *      Bra vid validering av användar input eller när vi får data från en webservice.
 */

let input = "123.34";

let integer = parseInt(input);
console.log(input, integer);
let float = parseFloat(input);
console.log(input, float);

input = "Kalle";
integer = parseInt(input);
console.log(input, integer);

if(integer == NaN) {        // Funkar inte, NaN == NaN är alltid falskt
    console.log("Integer is a NaN");
}

if(isNaN(integer)) {
    console.log("integer är en NaN");
}

// Med giltigt tal i input
input = "234";
integer = Number(input);
console.log(input, integer);

// Med ogiltit tal i input
input = "Kalle";
integer = Number(input);
console.log(input, integer);

if(!isNaN("123")) {
    console.log("isNaN -- sträng 123 är en NaN");
}

if(!Number.isNaN("123")) {
    console.log("Strängen 123 är inte en NaN");
} else {
    console.log("Strängen 123 är en NaN");
}

/*
 * Strängar
 */

// trim -- tarbort whitespace i början eller slutat av strängen

let testString = "    Martin    ";
console.log(testString, "innehåller", testString.length, "tecken");
let cleanString = testString.trim();        // trimStart() och trimEnd()
console.log(cleanString, "innehåller", cleanString.length, "tecken");  



let name = "Martin Haagen";
let indexOfSpace = name.indexOf(" ");
let firstName = name.substring(0, indexOfSpace);
console.log("Förnamnet är", firstName);