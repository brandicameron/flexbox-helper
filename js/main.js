gsap.registerPlugin(Flip);

const controls = document.querySelector(".controls");

function flex(e) {
  const flexContainer = document.querySelector(".container");
  const state = Flip.getState(".item");
  const settings = document.querySelector(".settings");

  let flexProp = e.target.parentElement.dataset.prop;
  flexContainer.style[flexProp] = e.target.value;

  // if (flexProp === "justifyContent") {
  //   settings.textContent = `justify-content: ${e.target.value}`;
  // }

  Flip.from(state, {
    absolute: true,
    duration: 0.4,
    ease: "sine",
  });
}

controls.addEventListener("click", flex);
