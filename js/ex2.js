//*************
//Exercise 1
// ************

document.getElementById("fahr_1").innerHTML = ConvertToFahrenheit(document.getElementById("celsius_1").innerHTML);
document.getElementById("fahr_2").innerHTML = ConvertToFahrenheit(document.getElementById("celsius_2").innerHTML);
document.getElementById("fahr_3").innerHTML = ConvertToFahrenheit(document.getElementById("celsius_3").innerHTML);

function ConvertToFahrenheit(celsius) {
    var celsius = parseFloat(celsius);
    var fah = (9 * celsius / 5) + 32;
    return fah;
}


//*************
//Exercise 2
// ************

var classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
document.getElementById("best_students").innerHTML = classification.slice(-3);


//*************
//Exercise 3
// ************

var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}

//a
document.getElementById("course_title").innerHTML = course.title;

//b
document.getElementById("main_category").innerHTML = course.categories[0];

//c
percentage();

function percentage() {
    var fiveStars = course["5_stars_reviews"];
    var total = course["1_stars_reviews"] + course["2_stars_reviews"] + course["3_stars_reviews"] + course["4_stars_reviews"] + course["5_stars_reviews"];
    var percentage = Math.round((fiveStars * 100) / total);

    document.getElementById("reviews_5_stars").innerHTML = percentage;
}

//*************
//Exercise 4
// ************
console.log("Exercise 4");

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
var aux = shoppingList.pop();
shoppingList.unshift(aux);

shoppingList.push("Cheese");
shoppingList.push("Eggs");

console.log(shoppingList);