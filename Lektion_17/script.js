
function setMessage(message) {
    const messageDiv = document.querySelector("#message");
    messageDiv.textContent = message;

    if(message != "") {
        messageDiv.className = "";
    } else {
        messageDiv.className = "hidden";
    }
}

/*
    Namngiven funktion:

    function namn() {}
*/
function hanterarKlickInline(){
    alert("Inline eventhandler");
    setMessage("Inline eventhandler");
}

/*
    Anonym funktion: 

    function() {}
*/
let myFunction = function() {
    // Här skriver jag kod
}

const exempel2btn = document.querySelector("#exempel2btn");
exempel2btn.onclick = function() {
    setMessage("Attribut event-handler"); 
}
/*
    "Pilfunktion"

    ( param ) => {}
*/
let pilFunction = (param) => {
    // Här skriver jag kod
}

const exempel3btn = document.getElementById("exempel3btn");
exempel3btn.addEventListener("click", () => {
    setMessage("");
});


const dogImg = document.querySelector("img");
dogImg.addEventListener("click", () => {
    setMessage("Woff woff!");
});
dogImg.addEventListener("dblclick", () => {
    setMessage("");
});
dogImg.addEventListener("mouseover", () => {
    setMessage("On mouse over!");
});


function setTimerDiv() {
    const counterDiv = document.querySelector("#counter");
    counterDiv.textContent = "Räknare: " + counter;
}

let counter = 0; 
setInterval(() => {
    counter++; 
    setTimerDiv();
}, 1000);


const clearCounterBtn = document.getElementById("clearCounterBtn");
clearCounterBtn.addEventListener("click", (event) => {
    //event.target.textContent = "Knapp";   // Här kan jag ändra texten på knappen när den blir "tryckt"
    counter = 0;
    setTimerDiv();
});

setTimerDiv();