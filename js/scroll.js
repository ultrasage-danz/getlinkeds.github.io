document.querySelector('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,behavior: 'smooth'

            });
        };
    });
});

const navContainer = document.querySelector('#nav-container');
const navLinks = navContainer.querySelectorAll('a[href^="#"]');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= currentScroll + 100 && section.offsetTop + section.offsetHeight > currentScroll + 100 )
            {
                link.classList.add('active-link');
            } else{
                link.classList.remove('active-link');
            
            }
            });

});


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-container");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
} 

let navbars = document.querySelector('.nav-container');
document.addEventListener('scroll', () =>{
    if(window.top.scrollY > 19){
        navbar.classList.add('scroll');
    }else{
        navbar.classList.remove('scroll');
        navbar.style.transition = '.4s ease';
    }
})