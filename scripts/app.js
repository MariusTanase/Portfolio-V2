// selecting navbar
const header = document.querySelector('header');

//if header position is bigger than 0 then add background color to header
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add('bg-dark');
    } else {
        header.classList.remove('bg-dark');
    }
}
