// Loading Animation
let wLoader = document.querySelector(".loader-wrapper");
let loader = document.querySelector(".loader");
let loadText = loader.textContent;

window.addEventListener("load", () => {
  loader.innerHTML = [...loadText]
    .map((t) => `<span style="display:inline-block">${t}</span>`)
    .join("");
  gsap.to(".loader span", {
    fontSize: 70,
    y: -50,
    ease: "bounce.in",
    color: "#6088ff",
    duration: 1.2,
    stagger: {
      each: 0.12,
      repeat: 2,
      yoyo: true,
    },
  });
  document.body.style.cssText = "height: 100vh";
  setTimeout(() => {
    loader.style.cssText = "opacity:0;";
    wLoader.style.cssText = "opacity:0; transition: opacity 1s ease-out ";
    document.body.style.cssText = "height:calc(400vh + 335px)";
  }, 5600);
  setTimeout(() => {
    loader.style.cssText = "display:none;";
    wLoader.style.cssText = "display:none;";
  }, 6600);
});

// ------------------------------------------------------------------

// Auto type effect

let word = "Developer";
let at = document.getElementsByClassName("auto-type")[0];
at.innerHTML = [...word].map((l) => `<span>${l}</span>`).join("");

function changeValues() {
  if (word === "Developer") {
    word = "Designer";
  } else if (word === "Designer") {
    word = "Developer";
  }
}
function updateDOM() {
  at.innerHTML = [...word].map((l) => `<span>${l}</span>`).join("");
}
function autoType() {
  gsap.to(".auto-type span", {
    visibility: "visible",
    ease: "power1.in",
    duration: 1,
    stagger: 0.1,
    yoyo: true,
    repeat: 1,
    onComplete: () => {
      changeValues();
      updateDOM();
      autoType();
    },
  });
}
updateDOM();
autoType();

// -------------------------------------------------------------------------------
// quote animation

gsap.registerPlugin(ScrollTrigger);

gsap.to(".quote", {
  opacity: 1,
  scale: 1.3,
  y: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".my-name",
    start: "top center",
    end: "+=100px",
    scrub: true,
  },
});
// --------------------------------------

//  transform nav bar into one smaller at about page

let logoBox = document.querySelectorAll(".logo, .span");
let nav = document.querySelector("nav");
let elements = document.querySelectorAll(".nav-items");
let vh = (window.innerHeight / 3) * 2.8;

window.addEventListener("scroll", () => {
  if (window.scrollY >= vh) {
    nav.className = "nav-box";
    logoBox[0].style.cssText = "display:none;";
    logoBox[1].style.cssText = "display:none;";
  } else {
    nav.className = "";
    logoBox[0].style.cssText = "display:block;";
    logoBox[1].style.cssText = "display:block;";
  }
});

// -------------------------------------------------------------------

// paragraph animation

gsap.to(".line1, .line2",{
  width: "+=92.15%",
  opacity: 1,
  duration:.5,
  ease: "power1.out",
  scrollTrigger:{
    trigger: '.quote',
    start: "top top",
  }
})
gsap.to(".wh-text", {
  opacity: 1,
  duration: .5,
  ease: "power1.in",
  x: "60%",
  scrollTrigger: {
    trigger: ".quote",
    start:"top top"
  }
})
gsap.to(".line", {
  opacity: 1,
  duration: .5,
  ease: "power1.out",
  scrollTrigger:{
    trigger: ".quote",
    start: "top top",
  },
  stagger:.5,
})
// parallax scroll animation

let about = document.querySelector(".about")
gsap.to(".about-image", {
  y: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".wrapper-about",
    scrub: true,
    start: "+=50 center",
    end: "+=200",
  }
})


  // projects opacity 1

gsap.to(".project1,.project3", {
  opacity: 1,
  y: -60,
  duration: .5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".p-animation",
    start: "top top",
  }
})
gsap.to(".project2", {
  y:30,
  opacity: 1,
  duration: .5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".p-animation",
    start: "top top",
  }
})
// ----------------------------------------------------------------------------

//  contact appearing

gsap.from(".whatsapp-contact h1, .whatsapp-contact a, email-box,number-box" ,{
  opacity: 0,
    y: 50,
  duration: .5,
  scrollTrigger: {
    trigger: ".contact",
    start:"top top",
    }
})
gsap.from(".email-box, .number-box", {
  opacity: 0,
  x: 50,
    duration: .5,
  scrollTrigger: {
    trigger: ".contact",
    start:"top top",
    }
})