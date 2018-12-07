var slides = document.querySelectorAll('#slider .carousel-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,6000);

function nextSlide() {
    slides[currentSlide].className = 'carousel-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'carousel-item showing';
}