mybutton = document.querySelector('.back_to_top');
myHeader = document.querySelector('header');
myMenu = document.querySelector('.menu');
var monBoutonLines = document.querySelectorAll(".line");
var i;

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myHeader.style.background = "white";
        myMenu.classList.add("scrolled");
        myHeader.classList.add("head_shadow");
        for (i = 0; i < monBoutonLines.length; i++) {
            monBoutonLines[i].style.background = "black";
        }
    } else {
        myHeader.style.background = "none";
        myMenu.classList.remove("scrolled");
        myHeader.classList.remove("head_shadow");
        for (i = 0; i < monBoutonLines.length; i++) {
            monBoutonLines[i].style.background = "white";
        }
    } if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        myMenu.classList.add("scrolled_size");
    } else {
        myMenu.classList.remove("scrolled_size");  
    } if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        mybutton.style.bottom = "20px";
    } else {
        mybutton.style.bottom = "-80px";  
    }
}

monBouton = document.querySelector("#toggleMenu"),
monMenuHamburber = document.querySelector(".nav_wrap_mobile");
monBoutonClose = document.querySelector(".close_mobile");

monBouton.addEventListener("click", function () {
    monMenuHamburber.classList.toggle("visible");
});
monBoutonClose.addEventListener("click", function () {
    monMenuHamburber.classList.toggle("visible");
});


