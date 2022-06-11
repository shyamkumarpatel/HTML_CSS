// var sandwich = {
//     bread:    "sourdough",
//     protein:  "london broil",
//     cheese:   "lacey swiss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// };
    
// console.log(sandwich);


// function sandwichFactory(bread, protein, cheese, toppings) {
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }
    
// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = ("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p1);
console.log(p2);

var toppingOptions = ["Pepperoni", "Sausage", "Mushrooms", "Bacon", "Onions", "Extra Cheese", "Peppers","Chicken"];
var cheesesOptions = ["mozzarella", "provolone", "feta", "Cheddar", "Parmesan"];

function randomPizza(){
    var randPizza = {
        crustType: ["hand tossed","deep dish"],
        sauceType: ["traditional", "marinara"], 
        cheeses: ["mozzarella", "provolone", "feta", "Cheddar", "Parmesan"],
        toppings: ["Pepperoni", "Sausage", "Mushrooms", "Bacon", "Onions", "Extra Cheese", "Peppers","Chicken"]
    };
    var crustSelected = Math.floor(Math.random()*randPizza.crustType.length);
    var sauceSelected = Math.floor(Math.random()*randPizza.sauceType.length);
    var numCheesesSelected = Math.floor(Math.random()*(randPizza.cheeses.length))+1;
    var cheeseOptionSelect = [];
    for(var i = 0; i < numCheesesSelected; i++){
        var index = Math.floor(Math.random()*(randPizza.cheeses.length));
        cheeseOptionSelect.push(randPizza.cheeses[index]);
        randPizza.cheeses.splice(index, 1);
    }

    var numToppingSelected = Math.floor(Math.random()*(randPizza.toppings.length))+1;
    var ToppingOptionSelect = [];
    for(var i = 0; i < numToppingSelected; i++){
        var index = Math.floor(Math.random()*(randPizza.toppings.length));
        ToppingOptionSelect.push(randPizza.toppings[index]);
        randPizza.toppings.splice(index, 1);
    }

    return pizzaOven(randPizza.crustType[crustSelected], randPizza.sauceType[sauceSelected], cheeseOptionSelect, ToppingOptionSelect)
}

console.log(randomPizza());