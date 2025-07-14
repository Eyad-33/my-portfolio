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
    duration: 0.7,
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

