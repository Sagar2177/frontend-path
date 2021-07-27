// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

var a =  [1, 2, 4, 0]
var b = [1, 2, [4, 0]]

function cloneArr(){
    var c = a.slice(0);
    var d = b.slice(0);
    console.log("Cloned Array "+c);
    console.log("Cloned Array "+d);
}

cloneArr();