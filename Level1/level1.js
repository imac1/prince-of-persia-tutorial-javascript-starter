/*
  Move the prince through the maze to find the princess.
  You can move the prince by calling the functions that
  are already created:
  `moveLeft`
  `moveUp`
  `moveDown`
  `moveRight`
*/

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowUp") {
    moveUp();
  } else if (e.key === "ArrowDown") {
    moveDown();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
  } else if (e.key === "ArrowRight") {
    moveRight();
  }
});