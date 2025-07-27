// my implementation of the forEach function
function myEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

// testing it
const arr = [1, 2, 3 , 4, 5];
myEach(arr, function(number) {console.log(number);});