showMainContent = contentId => {
    document.querySelectorAll('.content > div.active').forEach(div => {
        div.classList.remove('active');
    });
    document.getElementById(contentId).classList.add('active');
};

const slides = document.getElementById('slide-img');
const images = ['img/pic1.jpg', 'img/kid2.jpg', 'img/pic2.png', 'img/pic3.jpg'];

const total_slides = images.length;
let i = 0;
showSlides = () => {
    i = (i + 1) % total_slides;
    slides.style.opacity = 0;
    setTimeout(() => {
        slides.src = images[i];
        slides.style.opacity = 1;
    }, 300);
};
setInterval(showSlides, 3000);
