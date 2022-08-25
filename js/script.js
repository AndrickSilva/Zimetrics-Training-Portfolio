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


// portfolio

const portfolio_btn = document.querySelectorAll(".btn-bg button")
const portfolio_img = document.querySelectorAll(".img")

portfolio_btn.forEach(p => p.addEventListener('click', function () {
    
    portfolio_btn.forEach(p1 => p1.classList.remove('active'))
    p.classList.add('active')

    portfolio_btn.item(0).addEventListener('click', () => {
        portfolio_img.forEach(pti => pti.classList.remove('hide'))
    })
    portfolio_btn.item(1).addEventListener('click', () => {
        portfolio_img.forEach(pti => pti.classList.add('hide'))
        portfolio_img.item(4).classList.remove('hide')
        portfolio_img.item(5).classList.remove('hide')
    })
    portfolio_btn.item(2).addEventListener('click', () => {
        portfolio_img.forEach(pti => pti.classList.add('hide'))
        portfolio_img.item(3).classList.remove('hide')
    })
    portfolio_btn.item(3).addEventListener('click', () => {
        portfolio_img.forEach(pti => pti.classList.add('hide'))
        portfolio_img.item(0).classList.remove('hide')
        portfolio_img.item(1).classList.remove('hide')
        portfolio_img.item(2).classList.remove('hide')
    })
}))


// Loader
const load = document.getElementById("loader");

 setTimeout(function(){
    load.style.display = "none";
}, 1000);