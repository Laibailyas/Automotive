const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


















gsap.registerPlugin(ScrollTrigger);

const faqs = gsap.utils.toArray(".faq-item");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".faq-scroll-section",
    start: "top top",
    end: "+=4500", // longer scroll range for smoother pacing
    scrub: 0.8,    // balanced smoothness
    pin: true,
    anticipatePin: 1
  }
});

faqs.forEach((faq, i) => {
  const content = faq.querySelector(".faq-content");

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












// card upward section 

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.fromTo(
    card,
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      delay: i * 0.2,
      scrollTrigger: {
        trigger: ".serienreif-section",
        start: "top 80%",
      },
    }
  );
});
    



const faqs2 = document.querySelectorAll(".faq-box");

faqs2.forEach(box => {
  const toggle = box.querySelector(".faq-toggle");
  toggle.addEventListener("click", () => {
    // Toggle active
    box.classList.toggle("active");

    // Close others
    faqs2.forEach(other => {
      if (other !== box) other.classList.remove("active");
    });
  });
});
