// selecting navbar
const header = document.querySelector('header');
const hr = document.querySelector('hr');
//if header position is bigger than 0 then add background color to header
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add('bg-dark');
        hr.style.width = '100%';

    } else {
        header.classList.remove('bg-dark');
        hr.style.width = '80%';

    }
}

