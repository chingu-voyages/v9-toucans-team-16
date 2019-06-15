let mainNav = document.querySelector("#js-menu");
let navBarToggle = document.querySelector("#js-navbar-toggle");
let navContainer = document.querySelector("#js-navbar");
let barsToggle = document.querySelector("#js-bars");
let timesToggle = document.querySelector("#js-times") 
let appSdmContainer = document.querySelector("#js-app-sdm-container");
let heading = document.querySelector("#js-heading");

//Navbar toggle button
navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    navContainer.classList.toggle("background-img-toggle");
    barsToggle.classList.toggle("invisible-icon");
    timesToggle.classList.toggle("visible-icon");
    timesToggle.classList.toggle("invisible-icon");
    appSdmContainer.classList.toggle("disable");
    heading.classList.toggle("disable");
    
});


//Tawk Widget
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5d04ac6a36eab972111795fa/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();