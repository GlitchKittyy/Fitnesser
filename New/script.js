function scrollDown() {
    var targetPosition = 400;
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}


function scrollUp() {
    console.log('Scrolling up...');
    document.documentElement.scrollTop = 0;
}

window.onload = function() {
    console.log('Page loaded, initiating scroll...');
    setTimeout(function() {
        scrollUp();
    }, 100);
};


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden2, .hidden3, .read');
hiddenElements.forEach((el) => observer.observe(el));