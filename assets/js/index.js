const navToggle = document.querySelector('.nav-toggle');
const navlinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navlinks.forEach ('link', () => {
    document.body.classList.remove('.nav-open');
}