var slideIndex = 1;
showSlides(slideIndex);

function
 
plusSlides(n) {
  showSlides(slideIndex += n);
}

function
 
currentSlide(n) {
  showSlides(slideIndex = n);
}

function
 
showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
function autoSlide() {
    var slideIndex = 1; // Start at slide 1
    plusSlides(1); // Move to the next slide
    setTimeout(autoSlide, 5000); // Set a timer to call itself every 5 seconds
  }

  window.onload = autoSlide;