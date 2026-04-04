//Animação dos textos

function animarLandingPage() {
    const menu = document.querySelectorAll('.menu a');

    menu.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 500 + (index * 200));
    });
}

window.addEventListener('load', animarLandingPage);

//Zoom ao passar o mouse 

function animarHover(botao) {
    botao.addEventListener('mouseenter', () => {
        gsap.to(botao, { scale: 1.1, duration: 0.3 });
    });

    botao.addEventListener('mouseleave', () => {
        gsap.to(botao, { scale: 1, duration: 0.3 });
    });
}

window.addEventListener('load', () => {
    document.querySelectorAll('.btn-primary').forEach(animarHover);
});

//Carrosel

const container = document.querySelector('.card-container');

document.querySelector('.next').onclick = () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
};

document.querySelector('.prev').onclick = () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
};



