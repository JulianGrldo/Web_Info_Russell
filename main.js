document.getElementById('application-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const form = event.target;
        const successMessage = document.getElementById('success-message');
        successMessage.classList.remove('hidden');
        form.classList.add('hidden');
});

// Animación de aparición para secciones y cards
window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.section').forEach(el => {
        el.classList.add('fade-in');
    });
    document.querySelectorAll('.card').forEach(el => {
        el.classList.add('fade-in');
    });
});

// Animación de scroll para vacantes
const vacantes = document.querySelectorAll('.vacante-img');
if (vacantes.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.2 });
    vacantes.forEach(img => observer.observe(img));
}

// Efecto de subrayado animado en títulos
const underlineTitles = document.querySelectorAll('.underline-anim');
underlineTitles.forEach(title => {
    title.addEventListener('mouseenter', () => {
        title.classList.add('hovered');
    });
    title.addEventListener('mouseleave', () => {
        title.classList.remove('hovered');
    });
});