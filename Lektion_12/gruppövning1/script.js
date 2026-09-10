

let currentTemperature = 16;


// Under 0°C: "Stanna inne - eller använd jacka och täckbyxor!"
if ( currentTemperature < 0 ) {
    console.log("Stanna inne - eller använd jacka och täckbyxor!");
}

// Mellan 0-15°C: "Svensk sommar - ta på byxor och tröja!"
if ( currentTemperature >= 0) {
    if (currentTemperature <= 15) {
        console.log("Svensk sommar - ta på byxor och tröja!");
    }
}

// Över 15°C: "Skönt väder - shorts & tshirt!"
if (currentTemperature > 15) {
    console.log("Skönt väder - shorts & tshirt!");
}


// -- Refaktorerad efter if-else-if och logiska operatorer
if ( currentTemperature < 0 ) {
    console.log("Stanna inne - eller använd jacka och täckbyxor!");
} else if (currentTemperature >= 0 && currentTemperature <= 15) {
    console.log("Svensk sommar - ta på byxor och tröja!");
} else {
    console.log("Skönt väder - shorts & tshirt!");
}
