//*************
//Exercise 1
// ************

document.getElementById("convert").onclick = function() {
    var celsius = document.getElementById("temp_celsius").value;
    document.getElementById("temp_fahr").innerHTML = ConvertToFahrenheit(celsius);
}


function ConvertToFahrenheit(celsius) {
    var celsius = parseFloat(celsius);
    var fah = (9 * celsius / 5) + 32;
    return fah;
}


//*************
//Exercise 2
// ************

document.getElementById("anos_copa").innerHTML = "";

for (var i = 2022; i < 2050; i += 5) {
    document.getElementById("anos_copa").innerHTML += "<li>" + i + "</li>";
}


//*************
//Exercise 3
// ************

document.getElementById("calculate").onclick = function() {
    var grade1 = document.getElementById("grade1").value;
    var grade2 = document.getElementById("grade2").value;
    var absences = document.getElementById("absences").value;

    var result = "";
    if ((grade1 + grade2) / 2 >= 6.5 && absences <= 6) {
        result = "Student approved";
    } else {
        if ((grade1 + grade2) / 2 < 6.5) {
            result += "Student failed by grade<br>";
        }
        if (absences > 6) {
            result += "Student failed by absence";
        }
    }
    document.getElementById("result").innerHTML = result;
}

//*************
//Exercise 4
// ************

var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null

    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'

    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null

    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null

    }

];

document.getElementById("course_sales").innerHTML = "";
var total = 0;
for (var i = 0; i < sales.length; i++) {
    if (sales[i].refundRequested == null) {
        document.getElementById("course_sales").innerHTML += "<td>" + sales[i].student + "</td>" + "<td>" + sales[i].date + "</td>" + "<td>" + sales[i].amount + "</td>";
        total += parseFloat(sales[i].amount);
    }
}
document.getElementById("total_sold").innerHTML = total;