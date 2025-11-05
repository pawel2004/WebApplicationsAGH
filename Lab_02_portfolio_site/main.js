const navigationButton = document.getElementById('open-menu');
const changeThemeButton = document.getElementById('change-theme')
const navigation = document.getElementById('nav-menu');
const navigationLinks = document.querySelectorAll('.nav-link');

const toggleNavbar = () => {
    navigation.classList.toggle('visible');
}

const toggleTheme = (theme) => {
    if (theme === 'dark') {
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

changeThemeButton.addEventListener('click', () => toggleTheme(document.body.classList[0] == 'light' ? 'dark' : 'light'));

navigationLinks.forEach((e) => {
    e.addEventListener('click', toggleNavbar);
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleTheme('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    toggleTheme(e.matches ? 'dark' : 'light');
});