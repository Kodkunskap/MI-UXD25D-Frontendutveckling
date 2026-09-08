
// Steg 2
let name = "Martin";
let age = 26;
let city = 'Höör';
let favouriteIceCream = 'Snickers';

// Steg 3
console.log("Användaren heter " + name + ".");

// Steg 4
let ageInSevenYears = age + 7;
console.log('Personen fyller ' + ageInSevenYears + ' om 7 år.');
console.log('Personen fyller ' + (age + 7) + ' om 7 år.');

// Steg 5
const thisYear = 2026;
let birthYear = thisYear - age;
console.log(`Användaren föddes ${birthYear}`);

console.log(`Användaren föddes ${thisYear - age}`);     // Försiktighet - inte för långa uttryck i templatesträngen



