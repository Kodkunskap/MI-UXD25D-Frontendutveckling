
/*

[6]["Martin"][true][5.23][{ objekt }]
 0      1       2     3      4              <- index

*/

let anArray = [6, "Martin", true, 5.23, {}];

console.log("På andra platsen i min array har jag:", anArray[1]);   // anArray[1] - hämtar det som finns på plats 2 
console.log("På fjärde platsen i min array har jag:", anArray[3]);

anArray[2] = false; 
console.log("På tredje platsen i min array har jag:", anArray[2]);



/*

shift och unshift -> [ ][ ][ ][ ][ ] <- push och pop

*/


let customerQueue = [];

// Öppnar Cafét - kunderna kommer in
customerQueue.push("Anna");     // .push() - lägger till i slutet på arrayn
customerQueue.push("Bertil");
customerQueue.push("Cecilia");

console.log("Kö efter att vi har öppnat", customerQueue);

// VIP-gäster - dem får gå före i kön
// unshift - lägger till i början
customerQueue.unshift("Sven-Arne (VIP)");
console.log("Kö efter VIP", customerQueue);

// Betjänar våra kunder - från början början av kön
let customer = customerQueue.shift(); 
console.log("Betjänad kund", customer);
console.log("Kö efter första betjäning", customerQueue);

// Sista personen i kön - tröttnar och lämnar
// .pop 
customer = customerQueue.pop();
console.log("Kund som tröttnat", customer); // customer innehåller nu kunden som vi "pop":at
console.log("Köns utseende efter sista pop:en", customerQueue);


let numeriskLista = [3.23, 6.96, 1.12];     // 3 element - numeriskLista.length == 3
let average = (numeriskLista[0] + numeriskLista[1] + numeriskLista[2]) / 3;
console.log("Medel", average);

// numeriskLista.length 
let sum = 0;
for(let i=0; i<numeriskLista.length; i++) {
    console.log(i);
    sum = sum + numeriskLista[i];
}
average = sum / numeriskLista.length; 
console.log("Medel", average);


let patrik = [];
console.log(patrik, patrik.length);