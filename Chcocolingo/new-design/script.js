const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }// else {
          //  entry.target.classList.remove('show');
        //}
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden2, .hidden3, .read');
hiddenElements.forEach((el) => observer.observe(el));

function mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


mode();

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
