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






//depoimentos
const cards = document.querySelectorAll(".review-card");
let index = 0;

function updateCards() {
  cards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

document.querySelector("#nextReview").addEventListener("click", () => {
  index = (index + 1) % cards.length;
  updateCards();
});

document.querySelector("#prevReview").addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCards();
});

updateCards();





document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + cards.length) % cards.length;
  updateCards();
});

// init
updateCards();




//navbar scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


