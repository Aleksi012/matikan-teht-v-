let randomNumber1 = Math.floor(Math.random() * 10) + 1;
let randomNumber2 = Math.floor(Math.random() * 10) + 1;
let randomNumber3 = Math.floor(Math.random() * 10) + 1;
let randomNumber4 = Math.floor(Math.random() * 10) + 1;
let randomNumber5 = Math.floor(Math.random() * 10) + 1;


document.getElementById("span").innerHTML = randomNumber1 + " x " + randomNumber5
document.getElementById("span1").innerHTML = randomNumber2 + " x " + randomNumber4
document.getElementById("span2").innerHTML = randomNumber3 + " x " + randomNumber3
document.getElementById("span3").innerHTML = randomNumber4 + " x " + randomNumber2
document.getElementById("span4").innerHTML = randomNumber5 + " x " + randomNumber1

let vastaus = document.getElementById("button")

function myFunction() {
    input1 = document.getElementById("input1").value
    input2 = document.getElementById("input2").value
    input3 = document.getElementById("input3").value
    input4 = document.getElementById("input4").value
    input5 = document.getElementById("input5").value

    console.log(input1)
    console.log(input2)
    console.log(input3)
    console.log(input4)
    console.log(input5)
    
    if ( randomNumber1 * randomNumber5 == input1 ) {
        document.getElementById("vastaus1").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus1").innerHTML = "Väärin"
    }

    if ( randomNumber2 * randomNumber4 == input2 ) {
        document.getElementById("vastaus2").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus2").innerHTML = "Väärin"
    }

    if ( randomNumber3 * randomNumber3 == input3 ) {
        document.getElementById("vastaus3").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus3").innerHTML = "Väärin"
    }

    if ( randomNumber4 * randomNumber2 == input4 ) {
        document.getElementById("vastaus4").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus4").innerHTML = "Väärin"
    }

    if ( randomNumber5 * randomNumber1 == input5 ) {
        document.getElementById("vastaus5").innerHTML = "Oikein"
    } else {
        document.getElementById("vastaus5").innerHTML = "Väärin"
    }
} 

