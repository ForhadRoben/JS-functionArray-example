// practice 1
/* A year is a leap year if the following conditions are satisfied:
The year is a multiple of 400.
The year is a multiple of 4 and not a multiple of 100. */
/* function isLeapYear(year) {
    let a = year % 4, b = year % 400, c = year % 100;
    if (a === 0 && (b === 0 || c !== 0)) {
        return true
    }
    return false

}
// 1900,2004,2000,1700,2006
var leapYear = isLeapYear(1700);
console.log(leapYear); */

//practice 2:sum odd numbers


/* function getSumOfOddNumbers(numbers) {
    let sum = 0;
    const oddNumbers = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element % 2 === 1) {
            // oddNumbers.push(element)
            sum = sum + element;
            console.log(index, element)
        }
    }
    return sum;
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddSum = getSumOfOddNumbers(myNumbers);
console.log(oddSum); */

// practice 3:leap year check using function and array


// const checkLeapYear = [2000, 2001, 2002, 2004, 2008, 2010, 1900, 1700]
/* function getLeapYear(year) {
    const leapYear = [];
    for (let i = 0; i < year.length; i++) {
        const index = i;
        const element = year[index];
        if (element % 4 === 0 && (element % 400 === 0 || element % 100 !== 0)) {
            leapYear.push(element);
        }
    }
    return leapYear;

}
const checkLeapYear = [2000, 2001, 2002, 2004, 2008, 2010, 1900, 1700, 1896];
const isLeapYear = getLeapYear(checkLeapYear);
console.log('leap year :', isLeapYear); */

// practice 4: find even numbers from array and sum those numbers  and use two functions

function getEvenNumbers(numbers) {
    const evenNumbersSet = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (element % 2 == 0) {
            evenNumbersSet.push(element);
        }
    }
    return evenNumbersSet;

}
function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;

}
const myNumbers = [12, 65, 45, 78, 32, 45, 91, 16, 14, 16, 20];
const evenNumbers = getEvenNumbers(myNumbers);
console.log('even numbers are', evenNumbers);
const sumNumbers = sumEvenNumbers(evenNumbers);
console.log('sum of even Numbers are:', sumNumbers);