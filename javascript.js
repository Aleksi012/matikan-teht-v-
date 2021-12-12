let randomNumber1 = Math.floor(Math.random() * 10) + 1;
let randomNumber2 = Math.floor(Math.random() * 10) + 1;
let randomNumber3 = Math.floor(Math.random() * 10) + 1;
let randomNumber4 = Math.floor(Math.random() * 10) + 1;
let randomNumber5 = Math.floor(Math.random() * 10) + 1;
let randomNumber6 = Math.floor(Math.random() * 10) + 1;
let randomNumber7 = Math.floor(Math.random() * 10) + 1;
let randomNumber8 = Math.floor(Math.random() * 10) + 1;
let randomNumber9 = Math.floor(Math.random() * 10) + 1;
let randomNumber10 = Math.floor(Math.random() * 10) + 1;



document.getElementById("span").innerHTML = randomNumber1 + " x " + randomNumber2 + " ="
document.getElementById("span1").innerHTML = randomNumber3 + " x " + randomNumber4 + " ="
document.getElementById("span2").innerHTML = randomNumber5 + " x " + randomNumber6 + " ="
document.getElementById("span3").innerHTML = randomNumber7 + " x " + randomNumber8 + " ="
document.getElementById("span4").innerHTML = randomNumber9 + " x " + randomNumber10 + " ="

let vastaus = document.getElementById("button")

function myFunction() {
    input1 = document.getElementById("input1").value
    input2 = document.getElementById("input2").value
    input3 = document.getElementById("input3").value
    input4 = document.getElementById("input4").value
    input5 = document.getElementById("input5").value
    
    if ( randomNumber1 * randomNumber2 == input1 ) {
        document.getElementById("vastaus1").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus1").innerHTML = "Väärin"
        document.getElementById("oikeavastaus1").innerHTML = randomNumber1 * randomNumber2
    }

    if ( randomNumber3 * randomNumber4 == input2 ) {
        document.getElementById("vastaus2").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus2").innerHTML = "Väärin"
        document.getElementById("oikeavastaus2").innerHTML = randomNumber3 * randomNumber4
    }

    if ( randomNumber5 * randomNumber6 == input3 ) {
        document.getElementById("vastaus3").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus3").innerHTML = "Väärin"
        document.getElementById("oikeavastaus3").innerHTML = randomNumber5 * randomNumber6
    }

    if ( randomNumber7 * randomNumber8 == input4 ) {
        document.getElementById("vastaus4").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus4").innerHTML = "Väärin"
        document.getElementById("oikeavastaus4").innerHTML = randomNumber7 * randomNumber8
    }

    if ( randomNumber9 * randomNumber10 == input5 ) {
        document.getElementById("vastaus5").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus5").innerHTML = "Väärin"
        document.getElementById("oikeavastaus5").innerHTML = randomNumber9 * randomNumber10
    }

    myFunction = null
} 

