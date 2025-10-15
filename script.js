// 3D Image Rotation
const image = document.getElementById("rotatableImage");
let isDragging = false;
let lastX, lastY;
let rotateX = 0, rotateY = 0;

image.addEventListener("mousedown", (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - lastX;
  const deltaY = e.clientY - lastY;
  rotateY += deltaX * 0.3;
  rotateX -= deltaY * 0.3;
  image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  lastX = e.clientX;
  lastY = e.clientY;
});

// Animate feature cards only once on page load
window.addEventListener("load", () => {
  const features = document.querySelectorAll(".feature");
  features.forEach((feature, index) => {
    feature.style.animationDelay = `${index * 0.3}s`;
  });
});
