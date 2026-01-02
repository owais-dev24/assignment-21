//38-42 these chapters answers

//Q-1
function power(a, b) {
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}

document.write("Power Result: " + power(2, 3) + "<br>");

//Q-2
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

var year = parseInt(prompt("Enter year:"));
document.write("Year " + year + " is " + isLeapYear(year) + "<br>");

//Q-3
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function triangleArea(a, b, c) {
    var S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

document.write("Triangle Area: " + triangleArea(5, 6, 7) + "<br>");

//Q-4
function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction() {
    var m1 = 80, m2 = 75, m3 = 90;
    document.write("Average: " + calculateAverage(m1, m2, m3) + "<br>");
    document.write("Percentage: " + calculatePercentage(m1, m2, m3) + "%<br>");
}

mainFunction();

//Q-5
function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

document.write("Index: " + customIndexOf("Pakistan", "i") + "<br>");

//Q-6
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}

document.write(removeVowels("Hello JavaScript") + "<br>");

//Q-7
function countSuccessiveVowels(text) {
    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
        var pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

        switch (pair) {
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":
                count++;
        }
    }
    return count;
}

var sentence = "Pleases read this application and give me gratuity";
document.write("Successive Vowels Count: " + countSuccessiveVowels(sentence) + "<br>");

//Q-8
function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

var km = parseInt(prompt("Enter distance in KM:"));
document.write("Meters: " + toMeters(km) + "<br>");
document.write("Feet: " + toFeet(km) + "<br>");
document.write("Inches: " + toInches(km) + "<br>");
document.write("Centimeters: " + toCentimeters(km) + "<br>");

//Q-9
function overtimePay(hoursWorked) {
    var overtimeRate = 12;
    if (hoursWorked > 40) {
        return (hoursWorked - 40) * overtimeRate;
    } else {
        return 0;
    }
}

var hours = parseInt(prompt("Enter total hours worked:"));
document.write("Overtime Pay: Rs. " + overtimePay(hours));

//Q-10
var amount = parseInt(prompt("Enter amount in hundreds:")) * 100;

var hundredNotes = Math.floor(amount / 100);
var remaining = amount % 100;

var fiftyNotes = Math.floor(remaining / 50);
remaining = remaining % 50;

var tenNotes = Math.floor(remaining / 10);

document.write(
  "You will have " +
  hundredNotes + " hundred notes, " +
  fiftyNotes + " fifty notes and " +
  tenNotes + " ten notes."
);

//43-48
//Q-1 -Q-2
// INDEX FILE ANSWERS

//q-3
function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//q-4
function changeImage() {
    document.getElementById("img").src =
        "https://amateurphotographer.com/wp-content/uploads/sites/7/2019/09/Richard-Sibley-flowers.jpg";
}

function resetImage() {
    document.getElementById("img").src =
        "https://tse2.mm.bing.net/th/id/OIP.nL9lE5KOBkKchsKatuDDYwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3";
}

//q-5
var count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerHTML = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerHTML = count;
}