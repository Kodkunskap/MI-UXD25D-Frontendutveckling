
/*
    Loggning
*/

// Meddelanden som kommer ut i JavaScript-konsollen
console.log('Detta vanligt sätt att "logga"');
console.warn('Detta är console.warn');
console.error('Detta är console.error');

// Alert-rutor kan vi använda - men dem är påträngande
//alert("Detta är ett alert()-meddelande");

// Vi kan skriva till webbläsaren (dvs logga) med hjälp av document.write
// då blir det synligt i webbläsaren. Vi kan också skriva html. 
document.write("<h1>Detta är en rubrik, skapad med JavaScript</h1>");
document.write("Detta är utskrivet med document.write<br>");


/*
    Boolean - true / false
*/

let booleanVariable = true;     // = är en operator (tilldelning)

// Grundläggande matematiska jämförelse, <, >, ==. (opereratorer)
// <= (mindre än eller lika med), >= (större än eller lika med)
let booleanResult = 5 > 2;  // true
document.write("5 > 2: " + booleanResult + " <br>");
booleanResult = 5 < 2;      // false
document.write("5 < 2: " + booleanResult + " <br>");
booleanResult = 5 == 2;     // false
document.write("5 == 2: " + booleanResult + " <br>");


booleanResult = 5 == "5";   // tal som jämförs med en sträng (jämför värden)
document.write("5 == \"5\": " + booleanResult + " <br>");

// Tal. Tolkas alla tal som "sanna" utom 0
// Strängar. Tolkas som "sanna" om dem inte är tomma
 booleanResult = 5 === "5"; // jämför typ och värde
document.write("5 === \"5\": " + booleanResult + " <br>");

/*
    IF-satser  (kontrollflöden)

    if (uttryck)            <- om utrycket är sant
        uttryck;            <- så kommer detta uttrycket att köras

    Om vi villköra mer än ett uttryck så använder vi ett block. { }

*/

if (true) {
    document.write("Denna if-satsen kommer alltid att vara sann därför körs kodblocket!<br>")
}

if (false) {
    document.write("Denna if-satsen kommer alltid att vara falsk därför körs inte kodblocket!<br>")
}

if (5 < 2) {
    document.write("Denna if-satsen kommer inte att köras eftersom 5 < 2 -> false<br>");
}

if (5 > 2) {
    document.write("Denna if-satsen kommer att köras eftersom 5 > 2 -> true<br>");
}

let currentHour = new Date().getHours();
if (currentHour >= 10) {
    console.log('Klockan är efter 10 - dörren är öppen');
}
if(currentHour < 10) {
    console.log('Klockan är innan 10 - dörren är stängd');
}

/*
    if (uttryck)
        gör-uttryck
    else
        gör-else-uttryck;
*/

if (currentHour >= 10) {
    console.log('Klockan är efter 10 - dörren är öppen');
} else {
    console.log('Klockan är innan 10 - dörren är stängd');
}


if (1) {    // Tal som är icke 0 - är sanna
    document.write("1 är sant<br>")
}

if (0) {
    document.write("0 är sant<br>")   
}

if ("false") {
    document.write("\"false\" är en icke tom sträng -- därför true<br>");
}

let quizVariable = "false";

if (quizVariable === true) {
    alert("Sant!");
} else {
    alert("False!");
}