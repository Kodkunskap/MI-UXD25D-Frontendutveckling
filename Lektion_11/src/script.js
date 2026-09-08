
console.log("Detta är ett meddelande från min script.js");


/*
    Följande är inte korrekt JavaScript och skall därför ge 
    ett fel i konsollen. 
*/
// console.Log("Oj, det heter inte logg utan log");

console.log("Detta är ett meddelande efter felet!");



/*
    Variabler
*/

let currentAge = 26;        // Definierar och initierar (tilldelar värde) en variabel
currentAge = 32;            // Tilldelar vi ett värde till en redan existerande variabel

console.log(currentAge);

// 32 är ett heltal

let vatRate = 0.25;         // Flyttal - (decimaltal) - OBS! punkt inte komma
let name = "Martin";        // Sträng - skapas med citattecken - " "
name = 'Knut';              // - kan också skapas enkla apostrofer 
name = `Martin`;            // - `` kan användas för att skapa så kallade template strängar

console.log(name);

let acceptedTermsAndConditions = true;  // Booleans kan vara antingen sant eller falskt (true/false)


acceptedTermsAndConditions = "false";   // OBS "false" är inte samma sak som false (sträng vs boolean)

console.log("Vår användare " + name + " är " + currentAge + " år gammal!");

console.log(currentAge + "10");     // 3210 -- currentAge omvandlas till en variabel

const PI = 3.14; 

let radius = 10; 

// let circumference = 2 * 3.14 * 10;   Vad är 3.14 och 10? "Magiska nummer" -> byt till variabler och konstanter  
let circumference = 2 * PI * radius;  

console.log("Omkretsen på en cirkel med radien " + radius + " är " + circumference);


console.log(`Vår användare ${name} är ${currentAge} år gammal!`);
