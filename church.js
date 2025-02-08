
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
        if (window.scrollY > 600) { 
            navBar.classList.add("scrolled");
        } else {
            navBar.classList.remove("scrolled"); 
        }
    });
});
}