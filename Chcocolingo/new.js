function checkScreenSize() {
    if (window.innerWidth <= 768) {
        window.location.href = 'phone.html';
    }
}


checkScreenSize();
window.addEventListener('resize', checkScreenSize);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden,.knopScroll');
hiddenElements.forEach((el) => observer.observe(el));

function mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


mode();

function scrollUp() {
    var targetPosition = 0;
    window.scrollTo({
        top: targetPosition,
    });
}

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

function scrollUp() {
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}
function prijzen(){
    document.getElementById("second").scrollIntoView({ behavior: "smooth" });
    
}
