let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("carousel-item");
    let indicators = document.getElementsByClassName("carousel-indicators")[0].children;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Muda a imagem a cada 5 segundos
}

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    let indicators = document.getElementsByClassName("carousel-indicators")[0].children;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    indicators[slideIndex - 1].className += " active";
}

function currentSlide(n) {
    showSlide(slideIndex = n);
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

    // Cálculo do IMC
    const imcForm = document.getElementById('imcForm');
    if (imcForm) {
        imcForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100; // Converter cm para metros

            if (isNaN(weight) || isNaN(height)) {
                alert('Por favor, insira valores válidos.');
                return;
            }

            const imc = (weight / (height * height)).toFixed(2);
            let classification = '';

            if (imc < 18.5) {
                classification = 'Abaixo do peso';
            } else if (imc < 24.9) {
                classification = 'Peso normal';
            } else if (imc < 29.9) {
                classification = 'Sobrepeso';
            } else if (imc < 34.9) {
                classification = 'Obesidade grau I';
            } else if (imc < 39.9) {
                classification = 'Obesidade grau II';
            } else {
                classification = 'Obesidade grau III';
            }

            document.getElementById('result').innerText = `Seu IMC é ${imc} (${classification})`;
        });
    }
});
