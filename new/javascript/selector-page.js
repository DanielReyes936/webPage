function selectExample1() {
    var text = document.getElementsByTagName("h3");

    for (let i = 0; i < text.length; i++) {
        text[i].style.textAlign = "right";
    }
}

function example1Reset() {
    var text = document.getElementsByTagName("h3");

    for (let i = 0; i < text.length; i++) {
        text[i].style.textAlign = "left";
    }
}

function selectExample2() {
    var text = document.querySelectorAll('h2');

    for (x of text) {
        x.style.color = "red";
    }
}

function selectExample2B() {
    var text = document.querySelector('h2');

    
        text.style.color = "blue";
    }




function example2Reset() {
    var text = document.querySelectorAll('h2');

    for (x of text) {
        x.style.color = "black";
    }
}

function selectExample3A() {
    var text = document.getElementById("sample-3");

    text.style.color = "orange";
}

function selectExample3B() {
    var text = document.getElementById("sample-3");

    text.style.fontFamily = "TimesNewRoman";
}

function selectExample3C() {
    var text = document.getElementById("sample-3");

    text.style.fontStyle = "italic";
}

function example3Reset() {
    var text = document.getElementById("sample-3");

    text.style.fontFamily = "arial";
    text.style.color = "rgb(68, 58, 45)";
    text.style.fontStyle = "normal";
}

