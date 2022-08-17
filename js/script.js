// navigation-toggle

var bars = document.querySelector(".bars i");
var header = document.querySelector(".header");

bars.addEventListener('click', function () {
    header.classList.toggle('active')
        (bars.className == "fa-solid fa-bars" ? bars.className = 'fa-solid fa-xmark' : bars.className = 'fa-solid fa-bars')
});


// scroll

window.addEventListener('scroll', function () {
    const scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 400)
})


// active links on scroll (Incomplete logic)

const sec = document.querySelectorAll('section');
const li = document.querySelectorAll('.list-group-item');

window.addEventListener('scroll', function () {
    let len = sec.length;
    while (--len && window.scrollY + 500 < sec[len].offsetTop) { }
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
});

//typeWriter

var app = document.getElementById('typeWriterText');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString(' Im a <span class="typeUnderline"> Developer </span> ')
    .pauseFor(300)
    .deleteChars(13)
    .typeString('nd <span class="typeUnderline"> Designer </span>')
    // .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .pauseFor(1000)
    .start();


// slider

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });
