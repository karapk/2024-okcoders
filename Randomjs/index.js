import {color, log, red, green} from 'console-log-colors';

console.log(color.red("Boring message for practice"));

console.log(color.blue("Blue Men group"))

const numbers = [1, 2, 3, 4, 5];

function addOne(array) {
    for (let i=0; i <array.length; i++){
        console.log(color.red(array[i] + 1));
    }
}

addOne(numbers);

numbers.forEach(function(num) {
    console.log(color.green(num + 1));
});

numbers.forEach((num) =>{
    console.log(color.red(num + 1))
}

);

//holy trinity of programming: Map Reduce Filter

//FILTER

//filtering numbers example

// function isOdd(array, oddArr = []) {
//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 ! == 0) {
//             oddArr.push(array[i]);
//         }
//     }
//     return oddArr
// }

// const oddArray = isOdd(numbers);
// console.log(oddArray);

const easyOddArray = numbers.filter((num) =>  num % 2 !== 0);



console.log(easyOddArray);

//MAP EXAMPLE

const newNewArray = numbers.map((num) => num + 1)

console.log(newNewArray);

const total = numbers.reduce((sum, num) => sum + num );

console.log(total);