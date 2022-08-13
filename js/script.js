
// navigation-toggle

var bars = document.querySelector(".bars i");
var header = document.querySelector(".header");

bars.addEventListener('click', function () {
    header.classList.toggle('active')
    // bars.classList.toggle("hide");
    if (bars.className == "fa-solid fa-bars") {

        bars.className = 'fa-solid fa-xmark'
    } else {
        bars.className = 'fa-solid fa-bars'
    }
});


// scroll

window.addEventListener('scroll', function () {
    const scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 400)
})



