gsap.from(".hero-title", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 2,
  ease: "power3.out"
});



gsap.utils.toArray(".fascination-left, .fascination-right, .service-item, .sliding-card, .moving-card").forEach((elem) => {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%", // when element's top hits 80% of viewport height
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });
});



gsap.from(".service-item", {
  scrollTrigger: {
    trigger: ".service-container",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
});




gsap.timeline()
  .from(".hero-logo", { opacity: 0, scale: 0.8, duration: 1, ease: "back.out(1.7)" })
  .from(".hero-title", { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=0.5")
  .from(".hero-subtitle", { opacity: 0, y: 30, duration: 1, ease: "power3.out" }, "-=0.7")
  .from(".about-us", { opacity: 0, y: 20, duration: 1, ease: "power3.out" }, "-=0.1")



  ScrollTrigger.batch(".service-item", {
  onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2, duration: 1 }),
  start: "top 85%"
});

