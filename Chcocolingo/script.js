const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }/* else {
            entry.target.classList.remove('show');
        }*/
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden2, .hidden3, .read');
hiddenElements.forEach((el) => observer.observe(el));



function mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var huidigeFoto = document.getElementById('logoPic').src;
    if (huidigeFoto.endsWith('logo.png')) {
        document.getElementById('logoPic').src = 'logoW.png';
    } else {
        document.getElementById('logoPic').src = 'logo.png';
    }
}


mode();

function scrollUp() {
    var targetPosition = 0;
    window.scrollTo({
        top: targetPosition,
    });
}
scrollUp();

window.onload = function() {
    setTimeout(function() {
        scrollUp();
    }, 100);
};

function scrollDown(targetPosition) {
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

function redirectToDemo() {
    window.location.href = 'lingo.html';
}

window.addEventListener('load', function() {
    var demoButton = document.getElementById('demoButton');

    if (window.innerWidth <= 768) {
        demoButton.textContent = 'Apparaat niet ondersteund';
        demoButton.disabled = true;
        demoButton.classList.add('disabled');
    }
});

let clicked = 0;

function showWebsite(){
    var home = document.getElementById('home');
    var selecting = document.getElementById('selecting')
    
    if (clicked===0){
        selecting.style.display = "none";
        home.style.display = "grid";
        clicked++;
    }
    else{
        selecting.style.display = "grid";
        home.style.display = "none";
        clicked--;
    }
}