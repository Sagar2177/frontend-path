// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false or True 

var input =[1,2,3,4] ;

function checkArr(){
  console.log(Array.isArray(input));
}

checkArr();
