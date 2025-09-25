// Easter Egg: mostrar mensaje especial al dar 10 clics en "Aplicar Ahora"
let aplicarClicks = 0;
document.addEventListener('DOMContentLoaded', () => {
    // Restaurar funcionalidad: abrir modal al hacer clic en el checkbox
    window.mostrarModalTratamiento = function(e) {
        e.preventDefault();
        const modalTratamiento = document.getElementById('modal-tratamiento');
        if (modalTratamiento) {
            modalTratamiento.style.display = 'flex';
        }
        return false;
    };
    // Modal tratamiento de datos: abrir con el enlace, no con el checkbox
    const linkPolitica = document.getElementById('link-politica');
    const modalTratamiento = document.getElementById('modal-tratamiento');
    if (linkPolitica && modalTratamiento) {
        linkPolitica.addEventListener('click', function(e) {
            e.preventDefault();
            modalTratamiento.style.display = 'flex';
        });
    }
    // Botón aceptar del modal
    const btnAceptarModal = document.getElementById('btn-aceptar-modal');
    if (btnAceptarModal && modalTratamiento) {
        btnAceptarModal.onclick = function() {
            modalTratamiento.style.display = 'none';
            document.getElementById('autorizacion').checked = true;
        };
    }
    const btnAplicar = document.getElementById('btn-aplicar');
    const easteregg = document.getElementById('easteregg-message');
    if (btnAplicar && easteregg) {
        btnAplicar.addEventListener('click', function () {
            aplicarClicks++;
            if (aplicarClicks === 10) {
                easteregg.style.display = 'block';
                setTimeout(() => {
                    easteregg.style.display = 'none';
                    aplicarClicks = 0;
                }, 2000);
            }
        });
    }

    // (La lógica del modal se encuentra más abajo, solo dejar la nueva versión)
});
// Animación de aparición secuencial para beneficios
let beneficiosTimeouts = [];

function showBeneficiosPorFila() {
    const beneficioCards = Array.from(document.querySelectorAll('.beneficio-card'));
    const cols = 4; // igual que grid-cols-4
    beneficioCards.forEach(card => card.classList.remove('fade-in-beneficio'));
    beneficiosTimeouts.forEach(t => clearTimeout(t));
    beneficiosTimeouts = [];
    beneficioCards.forEach(card => card.style.opacity = '0');
    const filas = Math.ceil(beneficioCards.length / cols);
    for (let f = 0; f < filas; f++) {
        const timeout = setTimeout(() => {
            for (let c = 0; c < cols; c++) {
                const idx = f * cols + c;
                if (beneficioCards[idx]) {
                    beneficioCards[idx].classList.add('fade-in-beneficio');
                    beneficioCards[idx].style.opacity = '1';
                }
            }
        }, f * 400);
        beneficiosTimeouts.push(timeout);
    }
}

function hideBeneficios() {
    const beneficioCards = document.querySelectorAll('.beneficio-card');
    beneficioCards.forEach(card => {
        card.classList.remove('fade-in-beneficio');
        card.style.opacity = '0';
    });
    beneficiosTimeouts.forEach(t => clearTimeout(t));
    beneficiosTimeouts = [];
}

const beneficiosSection = document.getElementById('beneficios');
if (beneficiosSection) {
    const observerBeneficios = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showBeneficiosPorFila();
            } else {
                hideBeneficios();
            }
        });
    }, { threshold: 0.3 });
    observerBeneficios.observe(beneficiosSection);
}

// Animación CSS para fade-in-beneficio
const style = document.createElement('style');
style.innerHTML = `
  .fade-in-beneficio {
    animation: fadeInUpBeneficio 0.7s cubic-bezier(.23,1.01,.32,1) forwards;
  }
  @keyframes fadeInUpBeneficio {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
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