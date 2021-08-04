// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

const student = {
    name : "Sagar",
    class : "12th",
    roll_no: 38
}

console.log(student.name, student.class, student.roll_no);

//  2. Write a JavaScript program to delete the rollno property from the following object. 
// Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

const student = {
    name : "Sagar",
    class : "12th",
    roll_no: 38
}
//Before Deletion of the roll_no property
console.log(student.name, student.class, student.roll_no);

//After Deletion of the roll_no property
delete student.roll_no;
console.log(student.name, student.class, student.roll_no);



// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

const student = {
    name : "Sagar",
    class : "12th",
    roll_no: 38
}

console.log(Object.keys(student).length);

// 4. Write a JavaScript program to display the reading status 
// (i.e. display book name, author name and reading status) of the following books.
// var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
//  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
                { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
                { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
function display(){
        for(i=0;i<library.length;i++){
            console.log(library[i].author, library[i].title, library[i].readingStatus)
        }}
        display();


// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//  Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
//  Try To Attempt : Difficult Level Increased 


  
function Volume (height, radius) {
    
    
    console.log((height * Math.PI * radius * radius).toFixed(4));
  };
  
  var vol = new Volume(7, 4);


// 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

var library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];
  
  library.forEach((item) => {
  
    var allItems = Object.keys(item).sort();
      allItems.forEach((i) => {
        console.log(i, item[i]);
      });

  });

