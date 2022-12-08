function(phone) {
    if (typeof(phone) != "string") {
        phone = phone.string();
    }
    if (phone.length == 9) {
        console.log("Phone number is invalid");
    } else {
        console.log("Phone number is valid");
    }
}