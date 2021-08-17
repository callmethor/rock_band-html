/* js slide show */

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/* Js Menu */
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var currentHeight = header.clientHeight;

mobileMenu.onclick = function(){
 var isClose = header.clientHeight === currentHeight;
 if (isClose){
    header.style.height = 'auto';
 }else{
     header.style.height = null;
 }
}

/* Sub menu */
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for(var i=0; i<menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(!isParentMenu){
            header.style.height = null;
            
        }else{
            event.preventDefault();
        }
    }
}


/* Js buy ticket */
var buyBtns = document.querySelectorAll('.js-buy-ticket');
var modal = document.querySelector('.modal');
var modalClose = document.querySelector('.modal-close');
var modalContainer = document.querySelector('.modal-container');
function showBuyTickets() {
    modal.classList.add('open');

}

function closeBuyTickets() {
    modal.classList.remove('open');
}

modalClose.addEventListener('click', closeBuyTickets);

modal.addEventListener('click', closeBuyTickets);

for (var buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalContainer.addEventListener('click', function(event){
    event.stopPropagation();
})

