//alert

// alert("Testing the alert")

//Lesson 3 - Javascript Syntax

// console.log("Statement 1")
// console.log("Statement 2")

//********************************
//Lesson 4 - Working with the DOM
// *******************************

// console.log(document.getElementById("blue_box").innerHTML);

// document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>";

// console.log(document.getElementById("blue_box").innerHTML);


//********************************
//Lesson 5 - Variables
// *******************************


// var user_name = "Daniel";

// document.getElementById("user_greeting_message").innerHTML = "Hello " + user_name + "!";

//********************************
//Lesson 17 - Data types - Objects
// *******************************

// var employee = {
//     'name': 'James Taylor',
//     'yearOfBirth': 1948,
//     'ID': 'SBJ0001',
//     'role': 'IT Analyst'
// };

// employee.role = "IT Manager";
// employee.passport = "1023456";


// var courses = [{
//         'title': 'Learn code in Python 3',
//         'reviews': 6802,
//         'students': 130129,
//         'categories': ['programming', 'technology']
//     },

//     {
//         'title': 'Learn PHP -  Beginner to Advanced',
//         'reviews': 1204,
//         'students': 30521,
//         'categories': ['web development', 'programming']
//     },

//     {
//         'title': 'Learn Microsoft Excel 2020',
//         'reviews': 4209,
//         'students': 18560,
//         'categories': ['productivity', 'business']
//     }

// ];


//********************************
//Lesson 18 - Objects Methods
// *******************************

var student = {
    'firstName': 'Marie',
    'lastName': 'Smith',
    'fullName': function() {
        return this.firstName + ' ' + this.lastName;
    }
}