let mainNav = document.querySelector("#js-menu");
let navBarToggle = document.querySelector("#js-navbar-toggle");
let navContainer = document.querySelector("#js-navbar");
let barsToggle = document.querySelector("#js-bars");
let timesToggle = document.querySelector("#js-times") 
let appSdmContainer = document.querySelector("#js-app-sdm-container");
let heading = document.querySelector("#js-heading");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
    navContainer.classList.toggle("background-img-toggle");
    barsToggle.classList.toggle("invisible-icon");
    timesToggle.classList.toggle("visible-icon");
    timesToggle.classList.toggle("invisible-icon");
    appSdmContainer.classList.toggle("disable");
    heading.classList.toggle("disable");
    
});
