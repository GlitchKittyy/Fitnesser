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