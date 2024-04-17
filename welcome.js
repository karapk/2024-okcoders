console.log("hello class, welcome to module 3 day 2") //first git push in saturday class

const getTax = () => {
    const taxRate = 0.08;
    const tax = price * taxRate;
    return tax
};
//when using multiple lines of code in the function body use the return keyword and the curly braces
//if only one line then you can ommit return keyword and curly braces

const subtractTwoNumbers = (num1, num2) => num1 - num2;
console.log(subtractTwoNumbers(9, 2))

//getting an element using queryselector

// const getElement = document.querySelectorAll(element-selected);
//I keep forgetting to use document. document calls on the HTML file


//practicing forEach

const alphabetNumbers = [1, 5, 7, 8, 9];
alphabetNumbers.forEach((number) => {
console.log(number);    
}
);

//need to learn ternary operator here

//learn how to use the OR operator ||