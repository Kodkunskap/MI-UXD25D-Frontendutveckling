

class Customer {

    constructor(name, email) {
        this.name = name; 
        this.email = email;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    toString() {
        return `${this.name}, ${this.email}`;
    }

}



class CRM {

    database = [];

    add(customer) {
        this.database.push(customer);
    }

    printDatabase() {
        console.log("Customers");
        console.log("=========");
        for(let i=0; i<this.database.length; i++) {
            console.log(`${i+1}. ${this.database[i]}`);
        }
    }

    searchByName(searchStr) {
        console.log("Search results");
        console.log("==============");
        for(let i=0; i<this.database.length; i++) {
            const customer = this.database[i];
            if(customer.getName().includes(searchStr)) {
                console.log(`${i+1}. ${this.database[i]}`);
            }
        }       
    }

    searchByEmail(searchStr) {
        console.log("Search results");
        console.log("==============");
        for(let i=0; i<this.database.length; i++) {
            const customer = this.database[i];
            if(customer.getEmail().includes(searchStr)) {
                console.log(`${i+1}. ${this.database[i]}`);
            }
        }       
    }

    sortAlpha() {
        this.database.sort();   // Detta kommer att sortera toString() i bokstavsordning
    }

}




const crm = new CRM();
crm.add(new Customer("Stora företaget i Fulköping", "info@storaforetaget.se"));
crm.add(new Customer("Fulköpingsfotbollsklubb", "kansli@fulkopingsff.se"));
crm.printDatabase();

crm.searchByName("Arne");   // No match
crm.searchByName("före");   // Match on 1
crm.searchByEmail("@");     // Match all

crm.sortAlpha(); 
crm.printDatabase();


/*
 * TESTER
 */

/*
    Tester av Kund
 */
const c = new Customer("Namn", "Email");
console.assert(c.getName() === "Namn", "getName() ger inte korrekt namn");
console.assert(c.getEmail() === "Email", "getEmail() ger inte korrekt email");

c.setName("Namn2");
console.assert(c.getName() === "Namn2", "getName() ger inte korrekt namn");
c.setEmail("Email2");
console.assert(c.getEmail() === "Email2", "getEmail() ger inte korrekt email");

console.assert(c.toString() === "Namn2, Email2", "toString() returnerade fel värde: " + c.toString());

// CRM är inte lönt att testa -- inga av metoderna returnerar något värde