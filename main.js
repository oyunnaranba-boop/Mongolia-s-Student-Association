// Redirect Start Now button to extracurriculars.html
document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.querySelector('.hero-btn');
  if (startBtn) {
    startBtn.addEventListener('click', function() {
      window.location.href = 'extracurriculars.html';
    });
  }
});
const images = document.querySelectorAll(".image-grid img");

images.forEach(img => {

img.addEventListener("mousemove", () => {
img.style.transform = "scale(1.1)";
});

img.addEventListener("mouseleave", () => {
img.style.transform = "scale(1)";
});

});
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if(link.href === window.location.href){
    link.classList.add('active');
  }
});