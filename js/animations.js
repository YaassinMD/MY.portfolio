
/* =====================================
   GSAP INITIALIZATION
===================================== */

if (typeof gsap !== "undefined") {

    /* =====================================
       HERO ENTRANCE ANIMATION
    ===================================== */

    const heroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });

    // 1. Availability badge
    heroTimeline.fromTo(".availability",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }
    );

    // 2. Greeting
    heroTimeline.fromTo(".hero-greeting",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
    );

    // 3. Your name
    heroTimeline.fromTo(".hero-title",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.2"
    );

    // 4. Subtitle
    heroTimeline.fromTo(".hero-subtitle",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
    );

    // 5. Description
    heroTimeline.fromTo(".hero-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
    );

    // 6. Technology tags
    heroTimeline.fromTo(".hero-tags span",
        { opacity: 0, y: 15 },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12
        },
        "-=0.3"
    );

    // 7. Buttons
    heroTimeline.fromTo(".hero-buttons .btn",
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15
        },
        "-=0.2"
    );

    // 8. Bottom information
    heroTimeline.fromTo(".hero-bottom",
        { opacity: 0 },
        { opacity: 1, duration: 0.7 },
        "-=0.2"
    );


    /* =====================================
       AVAILABILITY DOT PULSE
    ===================================== */

    gsap.to(".status-dot", {
        scale: 1.4,
        opacity: 0.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

} else {
    console.error("GSAP failed to load. Check the CDN script.");
}

/* =====================================
   ABOUT SECTION ANIMATION
===================================== */

gsap.from(".about .section-heading", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power3.out"
});

gsap.from(".about-intro", {
    scrollTrigger: {
        trigger: ".about-content",
        start: "top 80%"
    },
    opacity: 0,
    x: -40,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".about-description p", {
    scrollTrigger: {
        trigger: ".about-description",
        start: "top 80%"
    },
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
});

/* =====================================
   SKILLS SECTION ANIMATION
===================================== */

const skillsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".skills",
        start: "top 75%",
        once: true
    }
});

// Section heading
skillsTimeline.fromTo(".skills .section-heading",
    {
        opacity: 0,
        y: 35
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
    }
);

// Skill cards
skillsTimeline.fromTo(".skill-category",
    {
        opacity: 0,
        y: 35
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
    },
    "-=0.3"
);

// Technology tags
skillsTimeline.fromTo(".skill-list span",
    {
        opacity: 0,
        y: 12
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out"
    },
    "-=0.2"
);

/* =========================================
   PROJECTS - GSAP SCROLL REVEAL
========================================= */

function initProjectsReveal() {

    const cards = gsap.utils.toArray(".project-card");

    if (!cards.length) return;

    // Reveal project heading
    gsap.from(".projects-header", {
        scrollTrigger: {
            trigger: ".projects",
            start: "top 80%",
            once: true
        },
        opacity: 0,
        y: 35,
        duration: 0.8,
        ease: "power3.out"
    });

    // Reveal each project card
    cards.forEach((card, index) => {

        gsap.fromTo(card,
            {
                opacity: 0,
                y: 45
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: (index % 2) * 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    once: true
                }
            }
        );

    });

}

// Initialize after project cards are rendered
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProjectsReveal);
} else {
    initProjectsReveal();
}


/* =====================================
   EDUCATION SECTION ANIMATION
===================================== */

const educationTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".education",
        start: "top 75%",
        once: true
    }
});

// Section heading
educationTimeline.fromTo(
    ".education .section-heading",
    {
        opacity: 0,
        y: 35
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    }
);

// Education card
educationTimeline.fromTo(
    ".education-card",
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    },
    "-=0.3"
);

/* =====================================
   CERTIFICATIONS SECTION ANIMATION
===================================== */

const certificationsTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".certifications",
        start: "top 75%",
        once: true
    }
});

certificationsTimeline.fromTo(
    ".certifications .section-heading",
    { opacity: 0, y: 35 },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    }
);

certificationsTimeline.fromTo(
    ".certificate-card",
    { opacity: 0, y: 40 },
    {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
    },
    "-=0.3"
);

/* =====================================
   CONTACT SECTION ANIMATION
===================================== */

const contactTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact",
        start: "top 75%",
        once: true
    }
});

contactTimeline.fromTo(
    ".contact .section-number",
    { opacity: 0, y: 20 },
    {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out"
    }
);

contactTimeline.fromTo(
    ".contact h2",
    { opacity: 0, y: 45 },
    {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out"
    },
    "-=0.2"
);

contactTimeline.fromTo(
    ".contact > p, .contact .btn, .social-links a",
    { opacity: 0, y: 20 },
    {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out"
    },
    "-=0.3"
);
