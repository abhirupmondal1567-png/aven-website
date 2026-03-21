// Smooth scroll for Explore button (if exists)
const exploreBtn = document.querySelector("button");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth"
        });
    });
}


// Scroll reveal animation
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", () => {
    let triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});


// Navbar shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.6)";
        } else {
            header.style.boxShadow = "none";
        }
    }
});


// Typing effect (hero text)
const heroText = "We Create Cinematic Stories";
let index = 0;

function typeEffect() {
    const hero = document.querySelector("#home h2");

    if (hero && index < heroText.length) {
        hero.innerHTML += heroText.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

// Reset and start typing
const hero = document.querySelector("#home h2");
if (hero) {
    hero.innerHTML = "";
    typeEffect();
}