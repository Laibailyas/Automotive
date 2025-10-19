const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = navLinks.querySelectorAll("a"); // ya .nav-link agar tumhare link ki class ye hai

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// har link per click event lagao
links.forEach(link => {
  link.addEventListener("click", () => {
    // sab se active class hatao
    links.forEach(l => l.classList.remove("active"));
    // jis per click hua us per add karo
    link.classList.add("active");
  });
});



const track = document.querySelector(".text-track");
const textWidth = track.offsetWidth / 2;

gsap.to(track, {
  x: -textWidth,
  duration: 15,
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % textWidth)
  }
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
  const image = service.querySelector(".service-image");

  // Open animation
  tl.to([content, image], {
    maxHeight: 400,
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 1
  }, "+=0.2");

  // Hold
  tl.to({}, { duration: 0.6 });

  // Close animation with fadeout
  tl.to([content, image], {
    maxHeight: 0,
    opacity: 0,      // smooth fade
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

if (window.innerWidth > 768) {
  gsap.registerPlugin(ScrollTrigger);


  const cards = gsap.utils.toArray(".moving-card1-wrapper, .moving-card2-wrapper, .moving-card3-wrapper");

  cards.forEach((card, i) => {
    gsap.to(card, {
      y: -50, // move upward
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".movingcards-section",
        start: `${50 + i * 12}% bottom`,
        end: "bottom 80%",
        scrub: 1.2, // smooth follow
        markers: false
      }
    });
  });
}








const splide = new Splide('.splide', {
  type: 'slide',
  // perPage: 4,
  gap: '1.5rem',
  pagination: false,
  arrows: true,
  speed: 700, // timing sync with transform animation
}).mount();

const cards = document.querySelectorAll('.sliding-card');

const transforms = [
  [
    'translateY(12%) rotate(-8deg)',
    'translateY(3.00498%) rotate(-4.00332deg)',
    'translateY(0%) rotate(-0.006639deg)',
    'translateY(3.00498%) rotate(4.00332deg)',
    'translateY(12%) rotate(8deg)',
    'translateY(26.9851%) rotate(11.9967deg)'
  ],
  [
    'translateY(27%) rotate(-12deg)',
    'translateY(12.01%) rotate(-8.00332deg)',
    'translateY(3.00997%) rotate(-4.00664deg)',
    'translateY(0%) rotate(0.0033195deg)',
    'translateY(3%) rotate(4deg)',
    'translateY(11.99%) rotate(7.99668deg)'
  ],
  [
    'translateY(48%) rotate(-16deg)',
    'translateY(27.0149%) rotate(-12.0033deg)',
    'translateY(12.0199%) rotate(-8.00664deg)',
    'translateY(2.99502%) rotate(-3.99668deg)',
    'translateY(0%) rotate(0deg)',
    'translateY(2.99502%) rotate(3.99668deg)'
  ]
];

let index = 0;

function applyTransforms() {
  cards.forEach((card, i) => {
    card.style.transform = transforms[index][i];
  });
}

splide.on('move', (newIndex, oldIndex) => {
  if (newIndex > oldIndex && index < transforms.length - 1) index++;
  else if (newIndex < oldIndex && index > 0) index--;
  applyTransforms();
});

applyTransforms();

const prevArrow = document.querySelector(".splide__arrow--prev");
if (prevArrow) {
  const svg = prevArrow.querySelector("svg");
  if (svg) svg.remove();
  prevArrow.innerHTML = '<i class="fas fa-arrow-left"></i>';
  prevArrow.setAttribute("aria-label", "Previous slide");
}

// Next Arrow
const nextArrow = document.querySelector(".splide__arrow--next");
if (nextArrow) {
  const svg = nextArrow.querySelector("svg");
  if (svg) svg.remove();
  nextArrow.innerHTML = '<i class="fas fa-arrow-right"></i>';
  nextArrow.setAttribute("aria-label", "Next slide");
}


document.querySelectorAll(".sliding-card").forEach(card => {
  const btn = card.querySelector(".sliding-btn");
  const icon = btn.querySelector("i");
  const layers = card.querySelectorAll(".color-layer");
  const text = card.querySelector(".extra-text");
  let open = false;

  // initial hidden states
  gsap.set(layers, { y: "110%" });
  gsap.set(text, { opacity: 0, y: 15 });

  btn.addEventListener("click", () => {
    if (!open) {
      // OPEN → bottom → top
      gsap.to(layers, {
        y: "-20px",
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out"
      });
      gsap.to(text, {
        opacity: 1,
        y: 0,
        delay: 0.7,
        duration: 0.4,
        ease: "power2.out"
      });
      icon.classList.replace("fa-plus", "fa-minus");
    } else {
      // CLOSE → top → bottom (reverse order)
      gsap.to(text, { opacity: 0, duration: 0.3 });
      gsap.to([...layers].reverse(), {
        y: "110%",
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.in",
        delay: 0.2
      });
      icon.classList.replace("fa-minus", "fa-plus");
    }
    open = !open;
  });
});



















// cursor 




const cursor = document.querySelector(".cursor-dot");
  const trail = document.querySelector(".cursor-trail");
  const trailCoords = [];
  const maxTrail = 12;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    trailCoords.push({ x: mouseX, y: mouseY });
    if (trailCoords.length > maxTrail) trailCoords.shift();
  });

  function animateCursor() {
    // smooth follow for main glowing dot
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    // trailing blur follow
    if (trailCoords.length > 1) {
      const avgX = trailCoords.reduce((a, b) => a + b.x, 0) / trailCoords.length;
      const avgY = trailCoords.reduce((a, b) => a + b.y, 0) / trailCoords.length;
      trail.style.left = avgX + "px";
      trail.style.top = avgY + "px";
    }

    requestAnimationFrame(animateCursor);
  }

  animateCursor();










  // pre loader 

  window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader");

    // let the animations finish
    setTimeout(() => {
      preloader.classList.add("hide");
      setTimeout(() => preloader.remove(), 500);
    }, 1000); // total duration now matches animations
  });












  // 2nd section animation 


  // Wrap every word in a <span>
const h2 = document.getElementById("fascination-text");
h2.innerHTML = h2.textContent
  .split(" ")
  .map(word => `<span class="word">${word}</span>`)
  .join(" ");



  // Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fascination-left .word").forEach((word, i) => {
  gsap.to(word, {
    scrollTrigger: {
      trigger: word,
      start: "top 80%",   // when the word is near viewport top
      end: "bottom 20%",  // when it moves further up
      toggleActions: "play reverse play reverse",
    },
    color: "#000", // animate to black
    ease: "none",
  });
});

