

class Animal {

    /*
        Egenskaper
    */
   name = "";       // Egenskap med en tom sträng
   speicies; 
   weight = 0.0;

   /*
        Konstruktor
    */
    constructor(name, speicies, weight) {
        this.name = name;
        this.speicies = speicies;
        this.weight = weight;
    }

   /*
    * Metoder
    */
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    sound() {
        if(this.speicies == "DOG") {
            return "WOFF WOFF!"
        }
        if(this.speicies == "CAT") {
            return "MJAU!"
        }

        return "WHAT DOES THE FOX SAY?";
    }


}

let cat = new Animal("Fluffy", "CAT", 7.23);

console.log("Vår katt heter", cat.getName());
console.log("Vårt djur säger", cat.sound());

let dog = new Animal("Boss", "DOG");
console.log("Vårt djur säger", dog.sound());


// ----


class Products {

    name;
    qty;
    price;

    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }


    getTotal() {
        return this.qty * this.price;
    }

    toString() {
        return this.name + "\t\t" + this.qty + "\t\t" + this.price;
    }

}


let milk = new Products("Mjölk", 4, 18.0);      // Instansierar 

console.log("Totalt pris", milk.getTotal());
console.log(milk.toString());




class Cart {

    products = [];      // Egenskap som innehåller alla produkter vi har lagt i vår kundkorg

    // Lägg till en ny produkt i kundkorgen
    add(prod) {
        this.products.push(prod);    
    }

    printBasket() {
        for(let i=0; i<this.products.length; i++) {
            let prod = this.products[i];
            console.log(prod.toString());
        }
    }

    printTotal() {
        let total = 0;
        for(let i=0; i<this.products.length; i++) {
            total += this.products[i].getTotal();
        }
        return total;
    }

}



// Skapa en ny kundkorg
const cart = new Cart(); 

cart.printBasket();
cart.add(milk);
cart.add(
    new Products("Knäckebröd", 1, 34)
);
cart.add(new Products("Batterier AAA", 2, 68));
cart.printBasket();
console.log("Totalt", cart.printTotal());