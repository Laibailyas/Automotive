const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


















gsap.registerPlugin(ScrollTrigger);

const services = gsap.utils.toArray(".service-item");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".service-scroll-section",
    start: "top top",
    end: "+=4500", // longer scroll range for smoother pacing
    scrub: 0.8,    // balanced smoothness
    pin: true,
    anticipatePin: 1
  }
});

services.forEach((service, i) => {
  const content = service.querySelector(".service-content");

  // Open
  tl.to(content, {
    maxHeight: 400,
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 1
  }, "+=0.2");

  // Hold (pause)
  tl.to({}, { duration: 0.6 });

  // Close
  tl.to(content, {
    maxHeight: 0,
    opacity: 0,
    y: 25,
    ease: "power2.inOut",
    duration: 1
  });
});









const faqs = document.querySelectorAll(".faq-box");

faqs.forEach(box => {
  const toggle = box.querySelector(".faq-toggle");
  toggle.addEventListener("click", () => {
    // Toggle active
    box.classList.toggle("active");

    // Close others
    faqs.forEach(other => {
      if (other !== box) other.classList.remove("active");
    });
  });
});