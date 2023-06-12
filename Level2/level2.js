/*
  Move the prince through the maze to find the princess.
  You can move the prince by calling the function `moveDirection`
  and passing the parameters
  `left`
  `right`
  `up`
  `down`
*/


window.addEventListener("load", () => {

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      moveDirection("up");
    } else if (e.key === "ArrowDown") {
      moveDirection("down");
    } else if (e.key === "ArrowLeft") {
      moveDirection("left");
    } else if (e.key === "ArrowRight") {
      moveDirection("right");
    }
  });

 
});
