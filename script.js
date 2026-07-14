// LOADING ANIMATION 

function loadingAnimation(){
    const tl = gsap.timeline();

tl.from(".line h1, .line h2, .line1-part1 h5, .line1-part1 h6", {
    y: 120,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    delay: 0.5,
    ease: "power3.out",
});

tl.from(".line1-part1 h5", {
    duration: 0.1,
    onStart: () => {
        const counter = document.querySelector(".line1-part1 h5");

        let value = 0;

        const interval = setInterval(() => {
            counter.textContent = String(value).padStart(2, "0");

            value++;

            if (value > 100) {
                clearInterval(interval);
            }
        }, 30);
    },
});

tl.to("#loader", {
    opacity: 0,
    duration: 1,
    delay: 4,
    ease: "power2.inOut",
});

tl.set("#loader", {
    display: "none",
});

tl.from("#page1",{
    y: 1200,
    opacity: 0,
})
}

// loadingAnimation();