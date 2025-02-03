cardSlider();

function cardSlider(){document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const cards = document.querySelectorAll('.card');
  let currentIndex = 0;

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 70}%)`;
  }

  function showNextCard() {
    
      currentIndex = (currentIndex + 1) % cards.length;
      console.log(cards.length);

      updateSlider();
  }

  function showPrevCard() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateSlider();
  }

  nextButton.addEventListener('click', showNextCard);
  prevButton.addEventListener('click', showPrevCard);

  
  setInterval(showNextCard, 10000);
});
}
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