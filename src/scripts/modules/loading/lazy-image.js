const images = document.querySelectorAll('.images');
const io = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src
      entry.target.onload = () => {
        entry.target.style.opacity = 1;
      }
    }
  }
});

for (const image of images) {
  io.observe(image);
}
