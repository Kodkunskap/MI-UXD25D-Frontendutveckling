
/*

    1, 2, 3, 4, 5, 6, ..., 1 000 000

    if (uttryck) { }

    while (uttryck) { 
        // uttryck
        // utytyck 
    }

    while (false) {
        // Denna koden kommer aldrig att köras
    }

    while (true) {
        // Detta är en "oändlig" loop
    }

*/

let sum = 1 + 2 + 3;
let N = prompt("Ange ett övre tal");
// let N = 1;

sum = 0;
let j = 1;

/*
    Om användaren säger att N skall vara 

    10: 10 gånger
    1 000 000: 1 000 000 gånger

*/
while(N >= j) { 
    sum = sum + j;
    j = j + 1;
}

// if (N >= 1) {
//     sum = sum + 1;
// }

// if (N >= 2) {
//     sum = sum + 2;
// }

// if (N >= 3) {
//     sum = sum + 3;
// }

console.log("Summan är: ", sum);


/*
    Hur många gånger behöver jag dubblera ett tal för att få ett tal som är 1500 eller större? 
*/ 

let dublications = 0; 
let number = 1;

while(number < 1500) {
    number = number + number;
    dublications = dublications + 1;
}
console.log(number, "är det första talet över 1500 och det tog ", dublications, " dupliceringar");


/*
    Math.random() -> returnerar ett tal mellan 0 och 0,99999999999 

    Vill ha ett tal mellan 1 och 100. 

    Multiplication med 100 -> 0 och 99,99999999
    Math.floor() -> 0 och 99
    Adderar jag 1 -> 1 och 100


*/


// let guess = Math.random()*100;
// guess = Math.floor(guess);
// guess = guess + 1;      // Guess kommer att innehålla ett slumptal mellan 1 och 100

let numberOfGuesses = 0;
let secret = 71;           // Tal mellan 1 och 100
let guess = 0;

while(guess != secret) {
    guess = Math.floor(Math.random()*100) + 1; 
    numberOfGuesses = numberOfGuesses + 1;
    console.log("Datorn gissar", guess);
}

// console.log("Datorn gissade ", guess, " vilket var rätt och det tog ", numberOfGuesses, "gånger");


/*

do {

} while(uttryck);

*/

// numberOfGuesses = 0;
// do {
//     guess = Math.floor(Math.random()*100) + 1; 
//     numberOfGuesses = numberOfGuesses + 1;
//     console.log("Datorn gissar", guess);    
// } while(guess != secret);

// console.log("Datorn gissade ", guess, " vilket var rätt och det tog ", numberOfGuesses, "gånger");


/*

    for( initierar loopen; uttryck; räkningsuttryck ) {
        // kod
    }

*/

for (let i=0; i <= 10; i=i+1) {
    console.log("Räknaren i är", i);
}



let qty = prompt("Ange hur många tal du har");
sum = 0;
for(let i = 1; i <= qty; i = i + 1) {
    let userNumber = prompt("Ange tal " + i);
    sum = sum + parseInt(userNumber);
}

console.log("Medeltalet är", sum / qty);
