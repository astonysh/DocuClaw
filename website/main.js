// === DocuClaw — Main JS (Stars + Interactions) ===

// --- Star Field Background ---
(function initStars() {
    const container = document.getElementById('stars');
    if (!container) return;

    const count = 120;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (3 + Math.random() * 5) + 's');
        star.style.setProperty('--delay', (Math.random() * 5) + 's');
        star.style.setProperty('--max-opacity', (0.2 + Math.random() * 0.6).toFixed(2));

        const size = 1 + Math.random() * 2;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        container.appendChild(star);
    }
})();

// --- Smooth Reveal on Scroll ---
(function initScrollReveal() {
    const sections = document.querySelectorAll('.section, .hero');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
})();
