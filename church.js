document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cards = document.querySelectorAll('.card');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateSlider();
    }

    function showPrevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateSlider();
    }

    nextButton.addEventListener('click', showNextCard);
    prevButton.addEventListener('click', showPrevCard);

    // Enable touch scrolling
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;

    slider.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPos = e.clientX;
        slider.style.transition = 'none';
    });

    slider.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const currentPosition = e.clientX;
            currentTranslate = prevTranslate + currentPosition - startPos;
            slider.style.transform = `translateX(${currentTranslate}px)`;
        }
    });

    slider.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            const movedBy = currentTranslate - prevTranslate;

            if (movedBy < -100 && currentIndex < cards.length - 1) {
                currentIndex += 1;
            } else if (movedBy > 100 && currentIndex > 0) {
                currentIndex -= 1;
            }

            updateSlider();
            slider.style.transition = 'transform 0.5s ease-in-out';
            prevTranslate = currentIndex * -slider.offsetWidth;
        }
    });

    slider.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            updateSlider();
            slider.style.transition = 'transform 0.5s ease-in-out';
        }
    });

    // Touch events for mobile devices
    slider.addEventListener('touchstart', (e) => {
        isDragging = true;
        startPos = e.touches[0].clientX;
        slider.style.transition = 'none';
    });

    slider.addEventListener('touchmove', (e) => {
        if (isDragging) {
            const currentPosition = e.touches[0].clientX;
            currentTranslate = prevTranslate + currentPosition - startPos;
            slider.style.transform = `translateX(${currentTranslate}px)`;
        }
    });

    slider.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            const movedBy = currentTranslate - prevTranslate;

            if (movedBy < -100 && currentIndex < cards.length - 1) {
                currentIndex += 1;
            } else if (movedBy > 100 && currentIndex > 0) {
                currentIndex -= 1;
            }

            updateSlider();
            slider.style.transition = 'transform 0.5s ease-in-out';
            prevTranslate = currentIndex * -slider.offsetWidth;
        }
    });

    setInterval(showNextCard,10000);
});
buggericon();

function  buggericon(){
document.querySelector('.js-menu').addEventListener('click',() =>{

    document.querySelector('.js-sidebar').style.display = 'flex';
    document.querySelector('.js-topbar').style.display = 'none';
    
});
}

closesidebar();
function closesidebar (){
    document.querySelector('.js-close-sidebar').addEventListener('click',()=>{
        document.querySelector('.js-sidebar').style.display = 'none';
        document.querySelector('.js-topbar').style.display = 'flex';
    })
}


changenavbarcolor();
function changenavbarcolor(){
document.addEventListener("DOMContentLoaded", ()=> {
    const navBar = document.querySelector(".js-nav-bar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) { 
            navBar.classList.add("scrolled");
        } else {
            navBar.classList.remove("scrolled"); 
        }
    });
});
}