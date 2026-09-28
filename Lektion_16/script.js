
/*
    Hämta referens till specifikt element
*/

const header = document.getElementById("siteHeader");               // Returnerar elementet med id siteHeader
console.log(header);

let aElements = document.getElementsByTagName("a");                 // Returnerar alla element av typen a
console.log("Vi har ", aElements.length, "a-taggar");
console.log(aElements);

let classElement = document.getElementsByClassName("route");        // Returnerar alla element med klassen route
console.log(classElement);

const footerP = document.querySelector("footer p");                 // Ett element returneras
console.log(footerP);

const sectionInMain = document.querySelectorAll("main section");    // Alla matchande element returneras
console.log(sectionInMain);

/*
    Navigation i DOM
*/

// Navigera "ner" i träder
const nav = header.querySelector("nav");    // Vi "söker" i en delmängd av DOM:en
const links = nav.children;
console.log("Antal länkar", links.length);
console.log(links);


// Navigera mellan syskon
const firstRoute = document.querySelector(".route");    
const secondRoute = firstRoute.nextElementSibling;  // Andra syskonet
const thirdRoute = secondRoute.nextElementSibling;  // Tredje syskonet
console.log(thirdRoute);


// Navigera uppåt
const heading = document.querySelector("h2");
const section = heading.parentElement;
const main = section.parentElement;
console.log(main);

/*
    Lägga till, ändra och radera i DOM
*/

// Ändra element

footerP.textContent = "Vandring i Sverige är kul! - &copy; Vandringsguiden 2026";      // Ändra innehållet (ej HTML)
footerP.innerHTML = "Vandring i Sverige är kul! - &copy; Vandringsguiden 2026";
//main.innerHTML = "<section class=\"route\"> <h2>Skåneleden</h2><p>Längd: 185 mil</p><p>Svårighet: Superlätt</p></section>"

// Förändra attribut på ett element
heading.setAttribute("title", "Min första vandring - Kungsleden");
heading.id = "first-route";

// Arbeta med style
secondRoute.style.color = "lightseagreen";
secondRoute.style.fontWeight = "bold";

// Lägg till CSS
firstRoute.classList.add('first');
firstRoute.classList.remove('first');

firstRoute.classList.toggle('first');
firstRoute.classList.toggle('first');

// Lägga till i DOM:en
function createNewRoute(name, length, difficulty) {
    const slSection = document.createElement("section");
    slSection.classList.add("route");

    // Skapa rubrik
    const h2 = document.createElement("h2");
    h2.textContent = name;  //"Skåneleden";
    slSection.appendChild(h2);
    
    // Skapa p-tag med längd
    let p = document.createElement("p");
    p.innerText = "Längd: " + length; //"Längd: 185 mil";
    slSection.appendChild(p);

    // Skapa p-tag med svårighet
    p = document.createElement("p");
    p.innerText = "Svårighet: " + difficulty; //"Svårighet: Superlätt";
    slSection.appendChild(p);

    return slSection;   // returnera sektionen
}


main.appendChild(
    createNewRoute("Skåneleden", "185 mil", "Superlätt")
);    // Lägger vi till vår nya section till DOM:en

const newTrail = createNewRoute("Sevedeleden", "55 km", "Medelsvår");
main.appendChild(newTrail);

// Radera saker från DOM:en

// Första sättet - använd en referens
const footer = document.querySelector("footer");
//footer.remove();


// Andra sättet - från föräldern
//document.body.removeChild(footer);

// Tredje sättet - använd innerHTML på föräldern
// footer.innerHTML = "";


// Klona markup
// thirdRoute - länk till Padjalanta leden

// Skapa ny nod baserat på befintlig i DOM:en
const storeMosse = thirdRoute.cloneNode(true);
storeMosse.children[0].innerText = "Storemosse runt";
storeMosse.children[1].innerText = "Längd: 65km";
storeMosse.children[2].innerText = "Svårighet: Medel";
main.appendChild(storeMosse);


// Skapa ny nod baserat på dold nod i DOM:en
// const templateRoute = document.querySelector(".templateRoute");
// const sm = templateRoute.cloneNode(true);
// sm.classList.remove("templateRoute");
// sm.classList.add("route");
// sm.children[0].innerText.innerText = "Storemosse runt";
// sm.children[1].innerText = "Längd: 65 km";
// sm.children[2].innerText = "Svårighet: Medel";
// main.appendChild(sm);   


setInterval(() => {
    const span = document.getElementById("tick");
    let tick = parseInt(span.innerText);
    tick++;
    span.innerText = tick;
}, 1000);

