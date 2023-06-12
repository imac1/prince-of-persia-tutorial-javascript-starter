/*
  Move the prince through the maze to find the princess.
  You can move the prince by calling the already created
  function `moveDirection` and passing the STRING as PARAMETER
  `left`
  `right`
  `up`
  `down`.
  Extra challenge: use a `for` or a `while` statement to avoid
  writing multiple times the same function call.
*/

window.addEventListener("load", () => {
  // Code to run when the window has finished loading

  document.addEventListener("keydown", (e) => {
    const direction = getDirectionByKey(e.key);
    if (direction) {
      moveDirection(direction);
    }
  });

  function getDirectionByKey(key) {
    if (key === "ArrowUp") {
      return "up";
    } else if (key === "ArrowDown") {
      return "down";
    } else if (key === "ArrowLeft") {
      return "left";
    } else if (key === "ArrowRight") {
      return "right";
    }
    return null; // Invalid key
  }



  const arrowDirections = ["right", "down", "left", "down", "right"];
  for (let direction of arrowDirections) {
    moveDirection(direction);
  }
});
