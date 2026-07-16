gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


// CURSON 

function cursonAnimation() {
    document.addEventListener("mousemove", function (dets) {
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
        y: -200,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
    }, "-=0.8");

    // Hero Lines
    tl.from("#hero-section .hero, #page2", {
        y: 80,
        opacity: 0,
        stagger: 0.18,
        duration: 1,
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

page1Animation();

function page3Animation() {
    Shery.imageEffect(".image-box", {
        style: 6,
        debug: true,

        noiseDetail: 7.44,
        distortionAmount: 2.98,
        scale: 36.36,
        speed: 0.79,

        zindex: -9996999,
        aspect: 0.7272614591338407,
        ignoreShapeAspect: true,

        shapePosition: {
            x: 0,
            y: 0
        },

        shapeScale: {
            x: 0.5,
            y: 0.5
        },

        shapeEdgeSoftness: 0,
        shapeRadius: 0,

        scrollLerp: 0.07,

        gooey: true,
        infiniteGooey: true,

        growSize: 4,

        durationOut: 1,
        durationIn: 1.5,

        displaceAmount: 0.5,

        masker: false,
        maskVal: 1,

        scrollType: 0,
        geoVertex: 1,

        noEffectGooey: true,

        onMouse: 0,

        noise_speed: 1.15,
        metaball: 0.61,

        discard_threshold: 0.47,
        antialias_threshold: 0.02,

        noise_height: 0.5,
        noise_scale: 21.37
    });
}

window.addEventListener("load", page3Animation);
