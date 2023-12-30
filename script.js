let boxes = document.getElementsByClassName("box");

function getRandomColor() {
  let colorOne = Math.ceil(0 + Math.random() * 255);
  let colorTwo = Math.ceil(0 + Math.random() * 255);
  let colorThree = Math.ceil(0 + Math.random() * 255);
  return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
}

Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});

document.body.style.backgroundColor = getRandomColor();
