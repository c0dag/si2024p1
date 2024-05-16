let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Muda a imagem a cada 5 segundos
}

function moveSlide(n) {
    slideIndex += n;
    showSlide(slideIndex);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();

    document.addEventListener('mousemove', function(event) {
        const image = document.querySelector('.parallax-image');
        const container = document.querySelector('.parallax-image-container').getBoundingClientRect();
        
        const mouseX = (event.clientX - container.left) / container.width;
        const mouseY = (event.clientY - container.top) / container.height;

        const moveX = (mouseX - 0.5) * 20;
        const moveY = (mouseY - 0.5) * 20;

        image.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
