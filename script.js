// CURSON 

function cursonAnimation(){
    document.addEventListener("mousemove", function(dets){
gsap.to("#crsr", {
    left: dets.x,
    top: dets.y
});
})

Shery.makeMagnet("#nav-part4 h4, #nav-part2 h4", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  transform: "translate(-50%, -50%)"
});
}

cursonAnimation();

function page1Animation() {

    const tl = gsap.timeline();

    // Loader Text
    tl.from(".line h1, .line h2, .line1-part1 h5, .line1-part1 h6", {
        y: 120,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        delay: 0.4,
        ease: "power4.out"
    });

    // Counter
    tl.from(".line1-part1 h5", {
        duration: 0.1,
        onStart: () => {
            const counter = document.querySelector(".line1-part1 h5");

            let value = 0;

            const interval = setInterval(() => {
                counter.textContent = String(value).padStart(2, "0");
                value++;

                if (value > 100) clearInterval(interval);
            }, 28);
        }
    }, "<");

    // Loader Exit
    tl.to("#loader", {
        opacity: 0,
        scale: 1.05,
        duration: 0.2,
        ease: "power3.inOut"
    }, "+=3");

    tl.set("#loader", {
        display: "none"
    });

    // Page Reveal
    tl.from("#page1", {
        yPercent: 100,
        duration: 1.2,
        ease: "expo.out"
    });

    // Navbar
    tl.from("#nav", {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
    }, "-=0.8");

    // Hero Lines
    tl.from("#hero-section .hero", {
        y: 80,
        opacity: 0,
        stagger: 0.18,
        duration: 0.8,
        ease: "power4.out"
    }, "-=0.45");

    tl.from("#hero-section p, #hero-section button", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4");

    // logo animation 

  Shery.hoverWithMediaCircle("#logo", {
    images: [
        "./image/logo-1.webp",
        "./image/logo-2.webp",
        "./image/logo-3.webp"
    ],
    scale: 1.2,
    duration: 1,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)"
});

}

// page1Animation();

