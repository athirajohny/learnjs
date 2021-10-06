alert('add alert message here');
console.log("this will display at the console of the browser");
console.log(789);

// variables
// let variablename = value;
let age = 23;
console.log(age);

let name = "athira";
let dob = 1998;
let email = 'athira@gmail.com';
console.log(name);
console.log(email);
//passing multiple values
console.log(dob, age);

//overiding values
age = 60;
console.log(age);

//to avoid overriding of values in a variable add keyword const
const points = 200;
// points = 50;
console.log(points);

var score = 40;
console.log(score);

let fname = "Athira";
let lname = "Johny";
fullName  = fname + lname ;
console.log(fullName);
// adding space in between
fullName = fname + ' ' + lname;
console.log(fullName);
//get a single character from string
console.log(fullName[0]);

//length of a string
console.log(fullName.length);

//string methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);
