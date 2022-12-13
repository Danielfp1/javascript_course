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
//Lesson 22 - Events
// *******************************

// document.getElementById("click-me").onclick = function() {
//     alert("You clicked the button");
// }

// document.getElementById("hover-me").onmouseover = function() {
//     alert("You moved the cursor over me");
// }

// document.getElementById("leave-me").onmouseout = function() {
//     alert("You moved the cursor out of me");
// }

// document.onkeydown = function(event) {
//     if (event.keyCode == '65') {
//         alert("Do something if letter 'a' is pressed.");
//     }
// };

// //Event manipulation via html attribute

// function show_alert() {
//     alert("You clicked the button");
// }

//********************************
//Lesson 23 - CSS Manipulation
// *******************************

// document.getElementById("color_button").onclick = function() {
//     document.getElementById("color_button").style.backgroundColor = "purple";
//     document.getElementById("color_button").style.transform = "TranslateX(100px)";
// }

// document.getElementById("color_button").onclick = function() {
//     this.style.backgroundColor = "purple";
//     this.style.transform = "TranslateX(100px)";
// }

// var button = document.getElementById("color_button");
// button.onclick = function() {
//     this.style.backgroundColor = "purple";
//     this.style.transform = "TranslateX(100px)";
// }

//********************************
//Lesson 28 - Conditionals 
// *******************************

// var name = "";
// if (name) {
//     console.log("The name is " + name);
// } else {
//     console.log("The name has not been informed");
// }


// var name = "Daniel";
// console.log(name ? "The name is " + name : "The name has not been informed");


// var age = 70;
// console.log(age < 18 ? 'Underage' : age >= 65 ? 'Senior' : 'Adult');


//********************************
//Lesson 29 - Nested Loops and Conditionals
// *******************************

// var isMember = false;
// var age = 25;

// if (isMember == true || age >= 65) {
//     console.log('Free');
// } else {

//     if (age < 18) {
//         console.log('$ 6.00');
//     } else {
//         console.log('$ 12.00');
//     }
// }

var employees = [

    {
        'name': 'Charles Silva',
        'age': 45,
        'children': ['Andrew Silva', 'Maria Silva']

    },

    {
        'name': 'Elizabeth Green',
        'age': 32,
        'children': ['Peter Green']

    },

    {
        'name': 'George Banks',
        'age': 39,
        'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']

    }

];


document.getElementById("children").innerHTML = "";
for (var a = 0; a < employees.length; a++) {
    var childrenList = employees[a].children;

    for (var b = 0; b < childrenList.length; b++) {
        var child = childrenList[b];
        document.getElementById("children").innerHTML += "<li>" + child + "</li>";
    }

}