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



// gsap.registerPlugin(ScrollTrigger);

// const services = gsap.utils.toArray(".service-item");

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".service-scroll-section",
//     start: "top top",
//     end: "+=5000", // longer scroll range for smoother pacing
//     scrub: 0.8,    // balanced smoothness
//     pin: true,
//     anticipatePin: 1
//   }
// });


// services.forEach((service, i) => {
//   const content = service.querySelector(".service-content");
//   const image = service.querySelector(".service-image");

//   tl.to(content, {
//   maxHeight: 400,
//   opacity: 1,
//   y: 0,
//   ease: "power2.out",
//   duration: 1,
//   onStart: () => gsap.set(image, { opacity: 0, display: "block" }), // image ready
//   onUpdate: () => {
//     // show image gradually once content starts appearing
//     if (content.style.opacity > 0.3) gsap.to(image, { opacity: 1, duration: 0.3 });
//   }
// }, "+=0.2");

//   // Hold
//   tl.to({}, { duration: 0.6 });


//   tl.to(content, {
//     maxHeight: 0,
//     opacity: 0,
//     y: 25,
//     ease: "power2.inOut",
//     duration: 1,
//     onComplete: () => gsap.to(image, { opacity: 0, duration: 0.4, onComplete: () => gsap.set(image, { display: "none" }) })
//   });

// });

gsap.registerPlugin(ScrollTrigger);

const services = gsap.utils.toArray(".service-item");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".service-scroll-section",
    start: "top top",
    end: "+=5000",
    scrub: 0.8,
    pin: true,
    anticipatePin: 1
  }
});

services.forEach((service, i) => {
  const content = service.querySelector(".service-content");
  const image = service.querySelector(".service-image");

  tl.to(content, {
    maxHeight: 400,
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 1,
    onStart: () => gsap.set(image, { display: "block", opacity: 0 }),
    onUpdate: function () {
      const progress = this.progress();
      if (progress > 0.3) gsap.to(image, { opacity: 1, duration: 0.3, overwrite: true });
      if (progress < 0.3) gsap.to(image, { opacity: 0, duration: 0.3, overwrite: true });
    },
    onReverseComplete: () => gsap.set(image, { display: "none" })
  }, "+=0.2");

  // Hold
  tl.to({}, { duration: 0.6 });

  tl.to(content, {
    maxHeight: 0,
    opacity: 0,
    y: 25,
    ease: "power2.inOut",
    duration: 1,
    onUpdate: function () {
      const progress = this.progress();
      // fade image out/in smoothly in both directions
      if (progress > 0.3) gsap.to(image, { opacity: 0, duration: 0.4, overwrite: true });
      if (progress < 0.3) gsap.to(image, { opacity: 1, duration: 0.4, overwrite: true });
    },
    onComplete: () => gsap.set(image, { display: "none" }),
    onReverseComplete: () => gsap.set(image, { display: "block", opacity: 1 })
  });
});














const faqs = document.querySelectorAll(".faq-box");

faqs.forEach((box) => {
  const toggle = box.querySelector(".faq-toggle");
  const content = box.querySelector(".faq-content");

  toggle.addEventListener("click", () => {
    // If already active, collapse
    if (box.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px"; // set to current height
      requestAnimationFrame(() => {
        content.style.maxHeight = "0";
      });
      box.classList.remove("active");
    } else {
      // Close others
      faqs.forEach((other) => {
        if (other !== box) {
          other.classList.remove("active");
          other.querySelector(".faq-content").style.maxHeight = "0";
        }
      });

      // Expand this one
      box.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
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



// ----------------------------------------------------








const cards = document.querySelectorAll(".sliding-card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let activeIndex = 0;
let settings = getSettings();

function getSettings() {
  const w = window.innerWidth;

  if (w > 900) return {
    rotate: true, active: 2
  };

  if (w > 768 && w < 900) return {
    rotate: true, active: 1
  };

  if (w < 768 && w > 600) return {
    rotate: false, active: 1
  };

  if (w < 600) return {
    rotate: false, active: 0
  }

}

function updateCards(direction = "none", animate = true) {
  const {
    // visible,
    rotate, active } = settings;
  const tl = gsap.timeline();



  const containerWidth = document.querySelector('.sliding-cards').offsetWidth; // ya window.innerWidth
  function getSpacingPercent() {
    const w = window.innerWidth;

    if (w >= 1200) return 24;  // large desktop
    if (w >= 900 && w < 1200) return 29;  // large desktop
    if (w >= 768 && w < 900) return 45;  // medium desktop
    if (w >= 600 && w < 768) return 48;  // tablet
    return 72;                  // mobile
  }
  const spacingPercent = getSpacingPercent();



  cards.forEach((card, i) => {
    const offset = i - activeIndex - active;
    const absOffset = Math.abs(offset);

    // spacing in pixels calculated from percentage
    let x = (containerWidth * spacingPercent / 100) * offset + (containerWidth * 5 / 100); // 5% extra offset
    // const y = rotate ? absOffset * 25 : 0;
    const y = rotate ? absOffset * (25 + Math.abs(offset) * 10) : 0;




    // screen ke hisaab se responsive value
    // const responsiveY = () => {
    //     const w = window.innerWidth;
    //     if (w >= 1200) return 75; // large desktop
    //     if (w >= 992) return 70;  // medium desktop
    //     if (w >= 768) return 65;  // tablet
    //     return 50;                 // mobile
    // }

    // const specialY = responsiveY();

    const rotation = rotate ? offset * 6 : 0;

    tl.to(card, {
      x,
      y,
      rotate: rotation,
      zIndex: 100 - absOffset,
      duration: animate ? 0.7 : 0,
      ease: "power3.out",
    }, 0);
  });





  // ✅ Correct disable logic — ensures full scroll till last card
  const maxIndex = cards.length - (active + 1);
  prevBtn.disabled = activeIndex <= 0;
  nextBtn.disabled = activeIndex >= maxIndex;

}

nextBtn.addEventListener("click", () => {
  const { active } = settings;
  const maxIndex = cards.length - (active + 1);
  if (activeIndex < maxIndex) {
    activeIndex++;
    updateCards("next");
  }
});

prevBtn.addEventListener("click", () => {
  if (activeIndex > 0) {
    activeIndex--;
    updateCards("prev");
  }
});

window.addEventListener("resize", () => {
  settings = getSettings();
  updateCards("none", false);
});

settings = getSettings();
activeIndex = 0;
updateCards("none", true);




function setSlidingCardsHeight() {
  const container = document.querySelector('.sliding-cards');
  const cards = document.querySelectorAll('.sliding-card');

  if (!container || cards.length === 0) return;

  const containerRect = container.getBoundingClientRect();

  let minTop = Infinity;
  let maxBottom = -Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const relativeTop = rect.top - containerRect.top;
    const relativeBottom = rect.bottom - containerRect.top;

    if (relativeTop < minTop) minTop = relativeTop;
    if (relativeBottom > maxBottom) maxBottom = relativeBottom;
  });

  const visibleHeight = maxBottom - minTop;

  // Add safe padding for rotation edges
  container.style.height = `${visibleHeight + 80}px`;
}

window.addEventListener('load', () => {
  setTimeout(setSlidingCardsHeight, 400); // wait for transforms
});

window.addEventListener('resize', () => {
  setTimeout(setSlidingCardsHeight, 200);
});

































// ----------------------------------------------------------

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















// ----------------------------------------------------



















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

