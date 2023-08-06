const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');

if(burger) {
    burger.addEventListener("click", function(e) {
        burger.classList.toggle("_active");
        nav.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    })
}
