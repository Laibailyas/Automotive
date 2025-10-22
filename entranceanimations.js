gsap.from(".hero-title", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 2,
  ease: "power3.out"
});



gsap.utils.toArray(".fascination-left, .fascination-right, .service-item, .moving-card").forEach((elem) => {
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

// WHO WE ARE section animation
gsap.from(".who-we-are .section-title", {
  scrollTrigger: {
    trigger: ".who-we-are",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 40,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".who-we-are li", {
  scrollTrigger: {
    trigger: ".who-we-are",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 0.9,
  stagger: 0.3,
  ease: "power3.out"
});

// OUR VALUES / VISION section animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".values-wraapper",
    start: "top 80%",
    toggleActions: "play none none none",
  }
})
  // Fade in overlay with slight zoom
  .from(".values-wraapper .overlay", {
    opacity: 0,
    scale: 1.1,
    duration: 1.2,
    ease: "power2.out"
  })
  // Subtitle fade-in from top
  .from(".values-wraapper .subtitle", {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
  // Title with scale + opacity
  .from(".values-wraapper .title", {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    ease: "back.out(1.7)"
  }, "-=0.5")
  // Description fades up smoothly
  .from(".values-wraapper .description", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  }, "-=0.5");

// OUR CLIENTS & PARTNERSHIPS animation
gsap.timeline({
  scrollTrigger: {
    trigger: ".clients",
    start: "top 85%",
    toggleActions: "play none none none",
  }
})
  // Title slides in from left
  .from(".clients .title", {
    opacity: 0,
    x: -60,
    duration: 1,
    ease: "power3.out"
  })
  // Description slides in from right for contrast
  .from(".clients .description", {
    opacity: 0,
    x: 60,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.7");

// LOGOS SECTION ANIMATION
gsap.from(".logos-wrapper div", {
  scrollTrigger: {
    trigger: ".logos-wrapper",
    start: "top 85%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  scale: 0.6,
  duration: 1,
  stagger: {
    amount: 1,   // total time for all logos to appear
    from: "center", // starts from center logos and goes outward
  },
  ease: "back.out(1.7)"
});

gsap.to(".logos-wrapper img", {
  y: -6,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "sine.inOut"
});

// FAQ SECTION ANIMATION
gsap.timeline({
  scrollTrigger: {
    trigger: ".faq",
    start: "top 85%",
    toggleActions: "play none none none",
  }
})
  // Heading reveal with underline line grow
  .from(".faq .section-heading", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out"
  })
  .from(".faq .title-line", {
    scaleX: 0,
    transformOrigin: "left center",
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.6")
  // FAQ boxes animate in with bounce and stagger
  .from(".faq-box", {
    opacity: 0,
    y: 50,
    rotateX: 10,
    duration: 0.9,
    stagger: 0.2,
    transformOrigin: "top center",
    ease: "back.out(1.5)"
  }, "-=0.3");


// JOURNEY SECTION ANIMATION
gsap.timeline({
  scrollTrigger: {
    trigger: ".journey-section",
    start: "top 80%",
    toggleActions: "play none none none",
  }
})
  // Background video fade-in
  .from(".journey-section .background-video", {
    opacity: 0,
    scale: 1.1,
    duration: 1.5,
    ease: "power2.out"
  })
  // Overlay fade + zoom
  .from(".journey-section .overlay", {
    opacity: 0,
    scale: 1.05,
    duration: 1.2,
    ease: "power2.out"
  }, "-=1")
  // Heading reveal with blur and upward motion
  .from(".journey-section h3", {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.7")
  .to(".journey-section h3", {
    filter: "blur(0px)",
    duration: 0.3
  }, "<");


// CONTACT SECTION ANIMATION
gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 85%",
    toggleActions: "play none none none",
  }
})
  // Left info slides in
  .from(".contact-info", {
    opacity: 0,
    x: -80,
    duration: 1.2,
    ease: "power3.out"
  })
  // Right form slides in
  .from(".contact-form", {
    opacity: 0,
    x: 80,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.8")
  // Social icons bounce in
  .from(".contact-socials a", {
    opacity: 0,
    y: 20,
    scale: 0.8,
    duration: 0.5,
    stagger: 0.15,
    ease: "back.out(1.7)"
  }, "-=0.4")
  // Footer logo fades + scales last (highlighted focus)
  .from(".footer-logo", {
    opacity: 0,
    scale: 0.8,
    y: 30,
    duration: 0.8,
    ease: "back.out(1.7)"
  }, "-=0.2")
  // Footer links fade up
  .from(".contact-footer .footer-links a", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out"
  }, "-=0.3");
