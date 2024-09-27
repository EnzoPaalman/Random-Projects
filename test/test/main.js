const slider = document.querySelector('.slider-inner');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const images = document.querySelectorAll('.slider-inner img');
const slideWidth = 300; // Adjust to your image width
const imagesPerPage = 3;

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex + imagesPerPage < images.length) {
        currentIndex += imagesPerPage;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= imagesPerPage;
        updateSlider();
    }
});

function updateSlider() {
    const translateX = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
}

updateSlider();

