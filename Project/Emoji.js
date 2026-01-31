const btn = document.querySelector("#emoji");
const emojis = [
  "😆",
  "😅",
  "🤣",
  "😂",
  "😀",
  "🤑",
  "🤨",
  "🙂",
  "😊",
  "😗",
  "😛",
  "😏",
  "🤥",
  "😴",
  "🥺",
  "😧",
  "😇",
  "😳",
  "🙃",
  "🥴",
  "🧐",
  "🤨",
  "😒",
  "🤔",
  "🤭",
  "🥰",
  "🤐",
  "👀",
  "🤔",
  "🤪",
  "🥲",
  "😃",
  "😁",
  "😬",
];
btn.addEventListener("mouseover", () => {
  const randomEmoji = Math.floor(Math.random() * emojis.length);
  btn.innerHTML = emojis[randomEmoji];
  btn.style.filter = "grayscale(0)";
});

btn.addEventListener("mouseout", () => {
  btn.style.filter = "grayscale(1)";
});

//
