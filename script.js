// script.js

// Função para calcular o IMC
function calculateIMC() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const imc = weight / (height * height);

    let category = "";
    if (imc < 18.5) {
        category = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        category = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        category = "Sobrepeso";
    } else {
        category = "Obesidade";
    }

    document.getElementById('result').innerText = `Seu IMC é ${imc.toFixed(2)} (${category}).`;
}

document.addEventListener("DOMContentLoaded", function() {
    // Carrossel de imaens
    showSlides();
    // Efeito de paralaxe
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

document.getElementById('formularioContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    
    
    // Mostra a mensagem de sucesso
    var successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Esconde a mensagem de sucesso após 3 segundos
    setTimeout(function() {
      successMessage.style.display = 'none';
    }, 3000);
    
    // Reseta o formulário
    this.reset();
  });
  
  