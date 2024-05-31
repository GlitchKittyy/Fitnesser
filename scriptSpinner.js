const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var options = ["Arms", "Legs", "Shoulders", "Chest", "Cardio", "Core", "Glutes", "Back", "Full Body"];

var spinner = document.getElementById('spinner');
var arrow = document.getElementById('arrow');
arrow.style.display = "none";

let random = 0;
let clicked = 0;
let results;
let selected = 0;
var result = document.getElementById('resultText');

function checkWorkout(){
    if(random <= 11) { results = options[0]; selected = 4; }
    else if(random >= 12 && random <= 22) { results = options[1]; selected = 14; }
    else if(random >= 23 && random <= 33) { results = options[2]; selected = 26; }
    else if(random >= 34 && random <= 44) { results = options[3]; selected = 39; }
    else if(random >= 45 && random <= 55) { results = options[4]; selected = 50; }
    else if(random >= 56 && random <= 66) { results = options[5]; selected = 61; }
    else if(random >= 67 && random <= 77) { results = options[6]; selected = 72; }
    else if(random >= 78 && random <= 88) { results = options[7]; selected = 83; }
    else if(random >= 89 && random <= 100) { results = options[8]; selected = 94; }
}

function spineffect() {
    let count = 0;
    const interval = setInterval(function() {
        if (count < 12) {
            result.style.fontWeight = "";
            let randomNum = Math.floor(Math.random() * options.length);
            result.textContent = options[randomNum];
            count++;
        } else {
            clearInterval(interval);
            result.textContent = results;
            result.style.fontWeight = "Bold";
        }
    }, 75);
}

function moveArrow() {
    if (clicked !== 0) {
        random = Math.floor(Math.random() * 100) + 1;
        checkWorkout();
        arrow.style.left = selected + "%";
        spinner.textContent = random;
        spineffect();
    } else {
        arrow.style.display = "flex";
        setTimeout(function() {
            random = Math.floor(Math.random() * 100) + 1;
            checkWorkout();
            arrow.style.left = selected + "%";
            spinner.textContent = random;
            spineffect();
        }, 1);
    }
    clicked++;
}

document.getElementById('spin').addEventListener('click', moveArrow);


function advanced() {
    var button_advanced = document.getElementById('advancedR');
    button_advanced.style.display = "none";
    spinner.style.display = "grid";
}

var body = document.getElementById('heelding');
function load(){
    setTimeout(function () {
        body.classList.add('fade-in');
        body.style.display = "grid";
    }, 600);
}
load();
