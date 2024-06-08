const button = document.querySelector(".change-color")
button.addEventListener("click",() =>{
  const body = document.body;
  const textColors = document.querySelector('.color');

  const randomHexColors = getRandomHexColor();

  body.style.backgroundColor = randomHexColors();

  const colorName = `<span class="color"${randomHexColors}></span>`
  textColors.innerHTML = '';
  textColors.insertAdjacentHTML('beforeend', colorName);
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
