// my implementations of some common array methods

// forEach runs a function on each element, and returns nothing
function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// testing it
const arr = [1, 2, 3 , 4, 5];
myEach(arr, function(number) {console.log(number);});

// map runs function on each element, returns results into new array
function myMap(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newElement = callback(array[i]);         
        newArray.push(newElement);
    }
    return newArray;
}

// test it
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = myMap(numbers, function(number) {
    return number * 2; 
});
console.log(doubledNumbers);

// testing different ways to define a function:
// doubledNumbers = myMap(numbers, x => x * 2);
// console.log("Doubled number version 2: ", doubledNumbers);
// doubledNumbers = myMap(numbers, (x) => {return x*2;});
// console.log("Doubled number version 3: ", doubledNumbers);
// let numbersPlusOne = myMap(numbers, function(x) {return x+1;});
// console.log("numbersPlusOne: ", numbersPlusOne);

// filter returns a new array with elements that pass the test implemented by the provided function
function myFilter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

// test it
let evenNumbers = myFilter(numbers, function(number) {
    return number % 2 === 0; 
});
console.log("Even numbers: ", evenNumbers);


// some returns true if any element passes the test implemented by the provided function
function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        } else {
            return false;
        }
    }
}

// test it
let isThreeThere = mySome(numbers, function(x) {
    return x === 3
});
console.log("Is three there?: ", isThreeThere);

// test it
let isSixThere = mySome(numbers, function(x) {
    return x === 6
});
console.log("Is six there?: ", isSixThere);