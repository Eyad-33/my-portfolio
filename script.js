// // Loading Animation
// let wLoader = document.querySelector(".loader-wrapper")
// let loader = document.querySelector(".loader");
// let loadText = loader.textContent;
// loader.innerHTML = [...loadText]
//   .map((t) => `<span style="display:inline-block">${t}</span>`)
//   .join("");
//   gsap.to(".loader span", {
//     fontSize: 70,
//     y: -50,
//     ease: "bounce.in",
//     color: "#6088ff",
//     duration: 1.2,
//     stagger: {
//       each: 0.12,
//       repeat: 2,
//       yoyo: true,
//     },
//   });
// document.body.style.cssText = "height: 100vh"
//   setTimeout(() => {
//   loader.style.cssText = "opacity:0;"
//     wLoader.style.cssText = "opacity:0; transition: opacity 1s ease-out "
//     document.body.style.cssText = "height:3562px"
//   }, 5600);
// setTimeout(() => {
//   loader.style.cssText = "display:none;"
//   wLoader.style.cssText = "display:none;"
// }, 6600);



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

gsap.registerPlugin(ScrollTrigger)

gsap.to(".quote", {
  opacity: 1,
  scale: 1.3,
  y:-50,
  ease:"none",
  scrollTrigger: {
    trigger: ".my-name",
    start: "top center",
    end:"+=100px",
    scrub: true,
  }
})