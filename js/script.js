
const Ohamburger= document.querySelector(".Ohamburger");
const OnavMenu= document.querySelector(".Onav-menu");
const header= document.querySelector(".header");


Ohamburger.addEventListener("click",()=>{
    Ohamburger.classList.toggle("active");
    OnavMenu.classList.toggle("active");



});


document.querySelectorAll(".Onav-link").forEach(n =>n.addEventListener("click",() =>{
    Ohamburger.classList.remove("active");
    OnavMenu.classList.remove("active");

}));

document.querySelectorAll(".drop_link").forEach(n =>n.addEventListener("click",() =>{
    Ohamburger.classList.remove("active");
    OnavMenu.classList.remove("active");
}));

// ==================================



//     =================================



$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
//
//
// // Add scroll design
//
const nav = document.querySelector(".header");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        nav.classList.add('active_nav');
    } else {
        nav.classList.remove('active_nav');
    }
})

