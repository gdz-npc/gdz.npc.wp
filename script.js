const toggle = document.getElementById('theme-toggle');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
    icon.className = dark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! Your message was sent (demo only).');
    e.target.reset();
});