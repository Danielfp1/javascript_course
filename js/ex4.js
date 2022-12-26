//*************
//Exercise 1
// ************
var shipments = {
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};


document.getElementById("shipments").onchange = function() {
    var selectField = document.getElementById("shipments");
    var selectedOption = selectField.options.selectedIndex;
    var selectedValue = selectField.options[selectedOption].value;

    var leadTime = shipments[selectedValue].leadTime;
    var fee = shipments[selectedValue].fee;

    var orderDate = new Date();
    console.log(orderDate);

    var deliveryDate = new Date(orderDate.getTime() + 86400000 * leadTime);
    console.log(deliveryDate);

    document.getElementById("order_date").innerHTML = orderDate.toISOString().slice(0, 10);
    document.getElementById("delivery_date").innerHTML = deliveryDate.toISOString().slice(0, 10);
    document.getElementById("delivery_fee").innerHTML = fee.toFixed(2);


}

//*************
//Exercise 2
// ************

var phones = {
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': '450',
        'currency': 'US$',
        'imageUrl': "https://a-static.mlcdn.com.br/800x560/iphone-se-apple-64gb-product-red-47-12mp-ios/magazineluiza/155613400/96cf38ad5dc77a1140eb9f378ce2372a.jpg"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': '869',
        'currency': 'EUR',
        'imageUrl': "https://assets.swappie.com/iphon11musta1-300x300.jpg"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': '519',
        'currency': 'US$',
        'imageUrl': "https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SL1500_.jpg"
    }
};

var checksRadio = document.getElementsByName("product");
for (var i = 0; i < checksRadio.length; i++) {
    checksRadio[i].onchange = function() {
        for (var j = 0; j < checksRadio.length; j++) {
            if (checksRadio[j].checked == true) {
                var selected = checksRadio[j].value;
                console.log(selected);

                document.getElementById("phone_image").src = phones[selected].imageUrl;
                document.getElementById("phone_name").innerHTML = phones[selected].name;

                //money
                var valor = parseFloat(phones[selected].price);

                //Reais
                // document.getElementById("phone_price").innerHTML = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); 
                // document.getElementById("phone_price").innerHTML = valor.toLocaleString('en-us', { style: 'currency', currency: 'USD' });

                document.getElementById("phone_price").innerHTML = phones[selected].currency + " " + valor.toFixed(2);


            }
        }

    }
}

//*************
//Exercise 3
// ************

//stopwatch
//reset
//start_stop

var isRunning = false,
    startTime,
    currentTime,
    elapsedTime = 0,
    clockInterval,
    hours,
    minutes,
    seconds,
    remainder,
    formattedTime;

function add_leading_zero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

document.getElementById("start_stop").onclick = function() {

    if (!isRunning) {
        isRunning = true;

        if (elapsedTime == 0) {
            startTime = new Date().getTime();
        } else {
            startTime = new Date().getTime() - elapsedTime;
        }

        clockInterval = window.setInterval(function() {

            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;

            //per hour 3600000
            //per minutes 60000
            //per seconds 1000

            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hours * 3600000);

            minutes = Math.floor(remainder / 60000);
            remainder = remainder - (minutes * 60000);

            seconds = Math.floor(remainder / 1000);
            remainder = remainder - (seconds * 1000);

            formattedTime = add_leading_zero(hours) + ":" + add_leading_zero(minutes) + ":" + add_leading_zero(seconds) + ":" + add_leading_zero(remainder);

            document.getElementById("stopwatch").innerHTML = formattedTime;

        }, 10);


    } else {
        window.clearInterval(clockInterval);
        isRunning = false;
    }

}

document.getElementById("reset").onclick = function() {
    startTime = new Date().getTime();
    if (!isRunning) {
        elapsedTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00 000";
    }

}