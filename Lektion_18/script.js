
/*
    Array
*/
const products = [
  { id: 1, name: 'Kaffekopp', category: 'Kök', price: 89, inStock: true },
  { id: 2, name: 'Skärbräda', category: 'Kök', price: 249, inStock: false },
  { id: 3, name: 'Kudde', category: 'Textil', price: 199, inStock: true },
  { id: 4, name: 'Pläd', category: 'Textil', price: 399, inStock: true },
  { id: 5, name: 'Ljusstake', category: 'Inredning', price: 149, inStock: true },
  { id: 6, name: 'Vas', category: 'Inredning', price: 89, inStock: false }
];

const availableProducts = products.filter((product) => { return product.inStock; });
console.log(availableProducts);
const cheap = products.filter( p => p.price < 150 );
console.log(cheap);

const productNames = products.map((product) => { return product.name; });
console.log(productNames);
const productsWithVat = products.map((p) => { 
        return { 
            ...p, 
            priceVat: p.price * 1.25, 
            vat: p.price * 0.25 
        }; 
    });
console.log(productsWithVat);


// Vad heter alla köksprodukter som finns i lager? 
const kitchen = products
                    .filter( p => p.category == 'Kök' && p.inStock )
                    .map(p => p.name);
console.log(kitchen);

/*
    Set
*/
const tags = new Set(); 
tags.add('js');
tags.add('css');
tags.add('js');

console.log(tags);

console.log('Finns js? ', tags.has('js'));
console.log('Finns html? ', tags.has('html'));

tags.delete('css');
console.log('Nu är vårt set ', tags.size, ' långt!');

tags.add('html');
tags.add('php');

for(const tag of tags) {
    console.log('Element i vårt set', tag);
}


/*
    Map
*/
const prices = new Map(); 
prices.set('Kaffekopp', 89);
prices.set('Pläd', 399);
prices.set('Kaffekopp', 82);
console.log(prices);

console.log('Vår prislista har en produkt som heter vattenmelon ?', prices.has('Vattenmelon')); // false
console.log('Vår prislista har en produkt som heter pläd ?', prices.has('Pläd'));   // true
console.log('En pläd kostar:', prices.get("Pläd"));

for(const [name, price] of prices) {
    console.log(name, price);
}

/*
    Todolista
 */


const todoList = new Map();
let idCounter = 0;

function addTodo(subject, duedate) {
    idCounter++;
    const todo = {
        id: idCounter,
        subject: subject,
        date: duedate
    };
    todoList.set(todo.id, todo);
}

function listTodo() {
    for(const [id, todo] of todoList) {
        console.log(`${todo.id}: ${todo.subject}`);
    }
}

function getTodo(id) {
    const todo = todoList.get(id);
    console.log(`${todo.id}: ${todo.subject}`);
}


addTodo("Ring skolan ang. frånvaro", null);
addTodo("Köpa mjölk", new Date());
addTodo("Lämna tillbaka bok på biblioteket", null);

listTodo();  

getTodo(idCounter);