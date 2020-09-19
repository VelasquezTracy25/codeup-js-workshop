console.log("Hello World");

document.getElementById("message").innerHTML = "Hello World!";

//Variables vs. Literals
// string literal: "Hello World"
let hello = "Hello world. How are you today?"
let el = document.getElementById("m2");
el.innerHTML = hello;

hello = "I hope you are well."
el = document.getElementById("m3");
el.innerHTML = hello;

let num = 7;
el = document.getElementById("m4");
el.innerHTML = num + 3.478;

//Emptiness
//Explicit : null
//Negligent: undefined

let theQuestion= true;
el = document.getElementById('m5');
el.innerHTML = theQuestion;

function testQuestion(question, element) {
    let theQuestion = question;
    let theEl = document.getElementById(element);
    if (theQuestion === true) {
        theEl.innerHTML = "The question is true;";
    } else {
        theEl.innerHTML = "The question is not true";
    }
}

testQuestion(false, 'm6');
testQuestion(true, 'm7');



