gsap.registerPlugin(Flip);

const controls = document.querySelector('.controls');

function changeFlexValues(e) {
  const flexContainer = document.querySelector('.container');
  const state = Flip.getState('.item');
  const flexProp = e.target.parentElement.dataset.prop;
  flexContainer.style[flexProp] = e.target.value;

  Flip.from(state, {
    absolute: true,
    duration: 0.4,
    ease: 'sine',
  });

  displayCurrentSettings(e, flexProp);
}

function displayCurrentSettings(e, property) {
  let currentFlexDirection = document.querySelector('.flex-direction');
  let currentJustifyContent = document.querySelector('.justify-content');
  let currentAlignItems = document.querySelector('.align-items');

  switch (property) {
    case 'flexDirection':
      currentFlexDirection.textContent = `flex-direction: ${e.target.value};`;
      break;
    case 'justifyContent':
      currentJustifyContent.textContent = `justify-content: ${e.target.value};`;
      break;
    case 'alignItems':
      currentAlignItems.textContent = `align-items: ${e.target.value};`;
      break;
  }
}

controls.addEventListener('click', changeFlexValues);
