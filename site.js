const header = document.querySelector('[data-header]');

function updateHeader() {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
}

document.querySelectorAll('[data-year]').forEach(element => {
    element.textContent = String(new Date().getFullYear());
});

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
