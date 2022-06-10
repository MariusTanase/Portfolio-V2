// selecting navbar
const headerBar = document.querySelector('.header');
const hrElement = document.querySelector('hr');

// Burger menu
let menuBar = document.querySelector(".burger__menu");
let getLines = document.querySelectorAll(".burger__menu-line");

//Selecting navbar
const navbarMenu = document.querySelector('.nav__menu');

//Back to top button
const backToTop = document.querySelector('.back-to-top');

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle(".active");

    // Check if menubar doesn't have class .active
    // to restore CSS of the burger menu to default
    if (!menuBar.classList.contains(".active")) {

        //Hide menu
        navbarMenu.style.left = "-140%";
        //Reverse the changes on line 1
        getLines[1].style.opacity = "1";
        getLines[1].style.transform = "none";


        //First line and third restore transform origin
        getLines[0].style.transform = "none";
        getLines[2].style.transform = "none";
    } else {

        //show the menu
        navbarMenu.style.left = "-10%";

        //   Hide the middle line and giving an animation
        getLines[1].style.opacity = "0";
        getLines[1].style.transform = "rotate(0deg) scale(0.2, 0.2)";

        getLines[0].style.transform = "rotate(45deg) translate(-2px, -1px)";
        getLines[2].style.transform = "rotate(-45deg) translate(-2px, -1px)";
    }
});

// when nav menu link is clicked the menu will be hidden and the burger menu will be restored to default
const navbarLinks = document.querySelectorAll(".nav__item");
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuBar.classList.toggle(".active");
        navbarMenu.style.left = "-140%";
        getLines[1].style.opacity = "1";
        getLines[1].style.transform = "none";
        getLines[0].style.transform = "none";
        getLines[2].style.transform = "none";
    }
    )
}
)


// Back to top function for button when scrolling to appear and when pressed to dissapear

// When the user scrolls down 20px from the top of the document, header add class bg-dark


window.onscroll = function () {
    if (window.pageYOffset > 1) {
        //Adding background to header after scroll
        headerBar.classList.add('bg-dark');
        hrElement.style.width = '100%';

        //Show back to top button
        backToTop.classList.add('show');
        backToTop.classList.remove('hide');

    } else {
        //Remove background from header
        headerBar.classList.remove('bg-dark');
        hrElement.style.width = '80%';

        // after button is pressed and the page is scrolled back to the top the button will be hidden with animation
        backToTop.classList.remove('show');
        backToTop.classList.add('hide');
    }
}

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0 });
});



