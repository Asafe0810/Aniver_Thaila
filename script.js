document.addEventListener('DOMContentLoaded', function() {
    // Configuração do confetti
    const confettiSettings = { 
        target: 'confetti',
        max: 150,
        size: 1.5,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[156, 124, 92], [165, 143, 119], [140, 120, 100], [180, 160, 140]],
        clock: 25,
        rotate: true,
        start_from_edge: true,
        respawn: true
    };
    
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    // Efeitos de animação ao scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.message-card, .carousel').forEach(el => {
        observer.observe(el);
    });
    
    // Efeito de digitação no título
    const title = document.querySelector('.title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 1000);
    
    // Atualizar ano atual no footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.querySelector('.footer p:last-child');
    if (yearElement) {
        yearElement.textContent = `© ${currentYear} - Feito com carinho`;
    }
});