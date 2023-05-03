document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function (event) {
      event.target.style.transform = "scale(1.1)";
      event.target.style.transition = "transform 0.3s";
    });

    button.addEventListener("mouseleave", function (event) {
      event.target.style.transform = "scale(1)";
      event.target.style.transition = "transform 0.3s";
    });
  });
});
