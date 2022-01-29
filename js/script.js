'use strict';

window.addEventListener('load', function () {
    // slider
    const prev = document.getElementById('btn-prev');
    const next = document.getElementById('btn-next');
    let slides = document.querySelectorAll('.slide');
    let index = 0;

    function activeSlide(n) {
        for (let slide of slides) {
            slide.classList.remove('active');
        }
        slides[n].classList.add('active');
    }

    function nextSlide() {
        if (index == slides.length - 1) {
            index = 0;
            activeSlide(index);
        } else {
            index++;
            activeSlide(index);
        }
    }

    function prevSlide() {
        if (index == 0) {
            index = slides.length - 1;
            activeSlide(index);
        } else {
            index--;
            activeSlide(index);
        }
    }
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    setInterval(nextSlide, 10000);

    // появление
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    let elements = document.querySelectorAll('.element-animation');
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);

    for (let elem of elements) {
        observer.observe(elem);
    }

    //menu
    document.getElementById('openBtn').addEventListener('click', function () {
        document.getElementById("mySidenav").style.height = "100%";
    });
    document.getElementById('closeBtn').addEventListener('click', function () {
        document.getElementById("mySidenav").style.height = "0";
    });
});