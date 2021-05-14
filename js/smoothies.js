const Classic        = ["strawberry", "banana", "pineapple", "mango", "peach", "honey", "ice", "yogurt"];
const ForestBerry    = ["strawberry", "raspberry", "blueberry", "honey", "ice", "yogurt"];
const Freezie        = ["blackberry", "blueberry", "black currant", "grape juice", "frozen yogurt"];
const Greenie        = ["green apple", "kiwi", "lime", "avocado", "spinach", "ice", "apple juice"];
const VeganDelite    = ["strawberry", "passion fruit", "pineapple", "mango", "peach", "ice", "soy milk"];
const JustDesserts   = ["banana", "ice cream", "chocolate", "peanut", "cherry"];

//=========================================================================================
// 1ª Maneira de fazer com Array e Functions (CONCAT e INDEXOF)
console.log("1ª Maneira de fazer");
console.log("Smoothies Original");
console.log(Classic);

let smoothies    =   Classic;
let addItem     =   ["chocolate"];
let removeItem  =   ["strawberry"];

SmoothieResult(smoothies,addItem,removeItem);

function SmoothieResult(smoothie,plus,minus){
    let smoothiePlus = smoothie.concat(plus);
    smoothieFinal = smoothiePlus.filter(function(ingredient){
             return minus.indexOf(ingredient);
         })
}

console.log("Smoothies Final");
console.log(smoothieFinal);

//=========================================================================================
// 2ª Maneira de fazer com Functions (PUSH e SPLICE)
console.log("2ª Maneira de fazer");
console.log("Smoothies Original");
console.log(Classic);

Add("chocolate");

function Add(ingrediente) {
   return Classic.push(ingrediente);
    
}
console.log("Adicionando");
console.log(Classic);

Remove("strawberry");
function Remove(ingrediente1){
    let index = Classic.indexOf(ingrediente1);
    if ( index > -1) {
        Classic.splice(index, 1);
    }
}

console.log("Removendo");
console.log(Classic);



