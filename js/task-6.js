const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const textInput = document.querySelector("input");

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  boxes.innerHTML = '';
  const amount = parseInt(textInput.value);

  if (amount > 0 && amount <= 100) {
    const fragment = document.createDocumentFragment();

    let width = 30;
    let height = 30;


    for (let i = 0; i < amount; i++) {
      const block = document.createElement("div");
      const randomHexColor = getRandomHexColor();
      block.style.width = width + 'px';
      block.style.height = height + 'px';
      block.style.backgroundColor = randomHexColor;
      fragment.appendChild(block);
      width += 10;
      height += 10;
    }
    boxes.appendChild(fragment);
  }
  textInput.value ='';
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  boxes.innerHTML ='';
}