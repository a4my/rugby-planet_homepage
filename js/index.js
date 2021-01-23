// NAVBAR
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbar = document.getElementsByClassName('navbar')[0];

toggleButton.addEventListener('click', () =>{
    navbar.classList.toggle('active');
});

// POLL

const voteBtn1 = document.getElementById('voteBtn-1');
const voteBtn2 = document.getElementById('voteBtn-2');
const voteBtn3 = document.getElementById('voteBtn-3');
const voted = document.getElementById('voted');

voteBtn1.addEventListener('click', () =>{
    voted.innerHTML="Romain N'Tamack";
});

voteBtn2.addEventListener('click', () =>{
    voted.innerHTML="Maro Itoje";
});

voteBtn3.addEventListener('click', () =>{
    voted.innerHTML="Beauden Barrett";
});

// SLIDESHOW

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
  setTimeout(showSlides, 3000); 
}