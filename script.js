let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$('.carousel-3d-controls').mdbCarousel3d();

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var searchValue = document.getElementById("searchInput").value;
    switch (searchValue.toLowerCase()) {
        case 'microsoft':
          window.location.href = "microsoft.html";
          break;
        case 'apple':
          window.location.href = "apple.html";
          break;
        case 'samsung':
          window.location.href = "samsung.html";
          break;
        default:
          alert(`Imposible de trouver ${searchValue}`)
          break;
      }
});