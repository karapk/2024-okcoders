//
let coffee = "arabica"

const coffeeKenya = "robusta"
//if I used coffee again it would give me an error because I already used with let
// const is a read only and variables can't be redefined

console.log(coffee);

const numbers = [1, 2, 3];

//new way I learnt of using functions

//forEach

numbers.forEach(function(num) {
    console.log(num + 1);
});
 // in the above code I added one number to the end of my array. I learnt to make it simpler by arrow functions as below

 numbers.forEach((num) => {
    console.log(num + 2);
 }

 )

 let fruits = ['apple', 'banana', 'orange', 'kiwi'];

    fruits.forEach((fruit, index) => {
    fruits[index] = fruit.toUpperCase();
    });

    console.log(fruits);


fruits.forEach(fruit => {
  fruits = fruit.toUpperCase();
});

console.log(fruits);

let i = 0;
console.log(i);
console.log(i++); 
console.log(i++);

// more practice stuff
function add(num1, num2) {
  return num1 + num2
}

console.log(add(4, 4));




