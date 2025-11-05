const navigationButton = document.getElementById('open-menu');
const changeThemeButton = document.getElementById('change-theme')
const navigation = document.getElementById('nav-menu');
const navigationLinks = document.querySelectorAll('.nav-link');

const toggleNavbar = () => {
    navigation.classList.toggle('visible');
}

const toggleTheme = () => {
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        navigationButton.style.backgroundImage = 'url("assets/menu_icon_dark.svg")';
        changeThemeButton.style.backgroundImage = 'url("assets/dark_mode.svg")';
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        navigationButton.style.backgroundImage = 'url("assets/menu_icon_light.svg")';
        changeThemeButton.style.backgroundImage = 'url("assets/light_mode.svg")';
    }
}

navigationButton.addEventListener('click', toggleNavbar);

changeThemeButton.addEventListener('click', toggleTheme);

navigationLinks.forEach((e) => {
    e.addEventListener('click', toggleNavbar);
});