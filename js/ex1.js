//*************
//Exercise 1
// ************

console.log("Exercise 1");

console.log("This is ex1.js");
console.log("");

//*************
//Exercise 2
// ************

var name = "Daniel Figueiredo Pereira";
var birthYear = 1996;
var age = new Date().getFullYear() - birthYear;

var studentMessage = "Hi, my name is " + name + ", I'm " + age + " years old and I'm learning Javascript"

document.getElementById("student_message").innerHTML = studentMessage;


//*************
//Exercise 3
// ************

var num1 = parseInt(document.getElementById("num_1").innerHTML);
var num2 = parseInt(document.getElementById("num_2").innerHTML);

var result = parseFloat((num1 + num2) / 2);
result = result.toFixed(2);

document.getElementById("result").innerHTML = result;


//*************
//Exercise 4
// ************
console.log("Exercise 4");

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

VerifyNumber(phone1);
VerifyNumber(phone2);
VerifyNumber(phone3);


function VerifyNumber(phone) {
    if (typeof(phone) != "string") {
        phone = toString(phone);
    }
    if (phone.length == 9) {
        console.log("Phone number is invalid");
    } else {
        console.log("Phone number is valid");
    }
}
console.log("");


//*************
//Exercise 5
// ************
console.log("Exercise 5");

console.log("36 to the power of 6 is: " + Math.pow(32, 6));
console.log("");


//*************
//Exercise 6
// ************
console.log("Exercise 6");

console.log(" (d) -> Dash\n (f) -> Start with a number\n (g) -> It's separated")
console.log("");


//*************
//Exercise 7
// ************
console.log("Exercise 7");


var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity);
console.log((7 + 5) / number + 2);
console.log(pressure);
console.log(temperature);
console.log(typeof pressure);
console.log(typeof temperature);
console.log("");

//*************
//Exercise 8
// ************

var url1 = document.getElementById("url_1").innerHTML;
var url3 = document.getElementById("url_3").innerHTML;
document.getElementById("url_2").innerHTML = "http://" + url1;
document.getElementById("url_4").innerHTML = url3.replace("https://", "");