const button = document.getElementById("button"); // selcting of button

button.addEventListener("click", function changeColor() {
  let hero = "0123456789abcdef"; // value to be used to generate random color hex code
  let color = "#";

  // iteration to generate random hex color code
  for (let i = 0; i < 6; i++) {
    color = color + hero[Math.floor(Math.random() * 16)]; //
  }
  // Changing of background color with randomly generated color
  document.getElementById("back-color").style.backgroundColor = color;
});
