const url = "https://api.thecatapi.com/v1/images/search";

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

async function fetchCatImage() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const imageUrl = data[0].url;
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("random_cats");
    container.innerHTML = ""; // clear previous
    container.appendChild(img);
  } catch (error) {
    console.error("Error fetching cat image:", error);
  }
}

btn.addEventListener("click", fetchCatImage);

//# sourceMappingURL=Cat.js.map
