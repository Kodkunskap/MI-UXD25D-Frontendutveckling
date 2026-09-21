/*

    let objekt = {
    
        egenskap: 5,

        metoder: function() {
        
        }

    };

*/


let product = {

    name: "Bröd",
    price: 24.90,
    ingredients: ["Vetemjöl", "Jäst", "Salt"],

    numberOfIngredients: function() {
        return this.ingredients.length; 
    },

    getName: function() {
        return this.name;
    },

    setName: function(name) {
        if(name == null || name == undefined || name.length == 0){
            return; 
        }
        this.name = name;
    }

};


console.log(product.name);
console.log(product.price);
console.log("Antal ingredienser", product.numberOfIngredients());

console.log(product);

console.log("Produktens namn (först)", product.getName());
product.setName("");
console.log("Produktens namn (felaktigt namn)", product.getName());
product.setName("Apelsin");
console.log("Produktens namn (giltigt namn)", product.getName());


function createProduct(paramName, paramPrice) {
    let product = {
        name: paramName,
        price: paramPrice,

        getName: function() {
            return this.name;
        },

        setName: function(paramName) {
            if(paramName == null || paramName == undefined || paramName.length == 0){
                return; 
            }
            this.name = paramName;
        }
    };

    return product;
}

let shoppingList = [];
shoppingList.push(
    createProduct("Mjölk", 15)
);
shoppingList.push(
    createProduct("Bröd", 25)
);
shoppingList.push(
    createProduct("Ägg", 30)
);

console.log(shoppingList);

shoppingList[1] = createProduct("Knäckebröd", 17.5);

for(let i=0; i<shoppingList.length; i++) {
    let product = shoppingList[i];
    console.log(product.getName(), "-", product.price);
}

