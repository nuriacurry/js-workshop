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

// map runs function on each element, collects results into NEW array and returns it
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
console.log("Doubled number version 1: ", doubledNumbers);

doubledNumbers = myMap(numbers, x => x * 2);
console.log("Doubled number version 2: ", doubledNumbers);
doubledNumbers = myMap(numbers, (x) => {return x*2;});
console.log("Doubled number version 3: ", doubledNumbers);
let numbersPlusOne = myMap(numbers, function(x) {return x+1;});
console.log("numbersPlusOne", numbersPlusOne);