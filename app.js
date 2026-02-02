// Landing page helpers
document.getElementById("year").textContent = new Date().getFullYear();

// Respect reduced motion for the animated pixel overlay
if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const px = document.querySelector(".bg__pixels");
  if (px) px.style.animation = "none";
}
