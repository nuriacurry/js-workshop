// my implementations of some common array methods

// forEach runs a function on each element, and returns nothing
function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// testing it
// const arr = [1, 2, 3 , 4, 5];
// myEach(arr, function(number) {console.log(number);});

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
const numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = myMap(numbers, function(number) {
//     return number * 2; 
// });
// console.log(doubledNumbers);

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
// let evenNumbers = myFilter(numbers, function(number) {
//     return number % 2 === 0; 
// });
// console.log("Even numbers: ", evenNumbers);


// some returns true if any element passes the test implemented by the provided function
function mySome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

// // test it
// let isThreeThere = mySome(numbers, function(x) {
//     return x === 3
// });
// console.log("Is three there?: ", isThreeThere);

// // test it
// let isSixThere = mySome(numbers, function(x) {
//     return x === 6
// });
// console.log("Is six there?: ", isSixThere);

// every returns true if EVERY elemnent passes the test implemented by the provided function
function myEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

// test it
// let areAllEven = myEvery(numbers, function(x) {
//     return x % 2 === 0
// });
// console.log("Are all even?: ", areAllEven);

// reduce combines all elements into a single value using an accumulator
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

// test it
// let sum = myReduce(numbers, function(acc, num) {
//     return acc + num;
// }, 0);
// console.log(sum); 

// inludes return true if a search value is in the array
function myIncludes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true;
        }
    }
    return false;
}

// test it
// let isseventhere = myIncludes(numbers, 7);
// console.log("is seven there?", isseventhere);

// let five = myIncludes(numbers, 1);
// console.log("is one there?", five);


// indexOf returns the index of the first position of a search element
function myIndexOf(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

//test
// let two = myIndexOf(numbers, 6);
// console.log("Where's 6", two);

// lastIndexOf returns the index of the last position of a search element
function myLastIndexOf(array, searchElement) {
    for (let i = array.length - 1; i > -1; i--) {
        if(array[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

// push appends a value to an array
function myPush(array, value) {
    array[array.length] = value;
    return array.length;
}

// test
// console.log(numbers.length);
// console.log(myPush(numbers, 7));

// keys returns the names of all the keys in an object
function grabKeys(object) {
    let keys = [];

    for (let key in object) {
        keys.push(key);
    }
    
    return keys;
}

const student = {name: 'John', age: 22, major: 'CS'};
console.log(grabKeys(student));

// values returns the valuee of all the keys in an object
function grabValues(object) {
    let values = [];
    for (let key in object) {
        values.push(object[key])
    }

    return values;
}

console.log(grabValues(student));

// test change