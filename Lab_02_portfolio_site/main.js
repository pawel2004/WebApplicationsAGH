const navigationButton = document.getElementById('open-menu');
const navigation = document.getElementById('nav-menu');
const navigationLinks = document.querySelectorAll('.nav-link');

const toggleNavbar = () => {
    navigation.classList.toggle('visible');
}

const toggleTheme = () => {
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
}

navigationButton.addEventListener('click', toggleNavbar);

navigationLinks.forEach((e) => {
    e.addEventListener('click', toggleNavbar);
});