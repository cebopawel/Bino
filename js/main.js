window.onload = function(){
    document.querySelector(".navbar-toggler-icon").style.setProperty("background-image","url('/img/hamburger.png')")
    ;}
    
const contmain = document.querySelector(".menu-container");

document.querySelector(".navbar-toggler-icon").addEventListener("click", function(){
    if (!document.querySelector(".navbar-collapse").classList.contains('show')){
        contmain.classList.add("mobile-menu")
        document.querySelector(".navbar-toggler-icon").style.setProperty("background-image","url('/img/close-icon.png')")
        
    } 
    else {
        contmain.classList.remove("mobile-menu")
        document.querySelector(".navbar-toggler-icon").style.setProperty("background-image","url('/img/hamburger.png')")
        
    }
});

   




    
    
    
