document.addEventListener('DOMContentLoaded', () => {
    animateContent();

    animateTitle();

    animateShowcaseItems();
});

function animateContent() {
    const content = document.querySelector('.content');
    content.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
}

function animateTitle() {
    const title = document.querySelector('.title');
    title.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
    title.style.opacity = '1';
    title.style.transform = 'translateY(0)';
}

function animateShowcaseItems() {
    const showcaseItems = document.querySelectorAll('.showcase-item');
    showcaseItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.showcase-item').forEach(item => {
    observer.observe(item);
});