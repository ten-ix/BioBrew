const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Subtle reveal animation using the browser's native IntersectionObserver.
const revealItems = document.querySelectorAll(
  ".science-card, .timeline-item, .team-card, .stat-card"
);

revealItems.forEach(item => item.style.opacity = "0");

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.animate(
      [
        { opacity: 0, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 550, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
    );
    obs.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));
