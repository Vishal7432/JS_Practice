// Color Scheme Switcher

const colorSchemeSelect = document.getElementById("color-scheme");
// console.log(colorSchemeSelect);
const body = document.querySelector("body");

colorSchemeSelect.addEventListener("change", () => {
  const value = colorSchemeSelect.value;

  if (value === "light") {
    body.backgroundColor = "white";
    body.style.color = "black";
  } else if (value === "dark") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else if (value === "green") {
    body.style.backgroundColor = "green";
    body.style.color = "white";
  } else if (value === "solarized") {
    body.style.backgroundColor = "#fdf6e3";
    body.style.color = "#657b83";
  }
});

// Example: A simple greeting function
