// let para1 = document.createElement("p");
// para1.innerText = "Hi I`m red";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let para3 = document.createElement("h3");
// para3.innerText = "hi i`m blue tag !";

// document.querySelector("p").prepend(para3);

// para3.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I`m in div";
// para2.innerText = "Me too";

// div.append(h1);
// div.append(para2);

// div.classList.add("box");

// document.querySelector("body").append(div);

// document.querySelector("body").prepend(div);

// let div = document.createElement("div");
// let Input = document.createElement("input");
// let btn = document.createElement("button");
// btn.innerText = "click me!";
// Input.placeholder = "username";
// btn.classList.add("btn");
// document.querySelector()

// div.append(Input);
// div.append(btn);

// document.querySelector("body").append(div);

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   let randomColor = getRandomColor();
//   let h3 = document.querySelector("h3");
//   h3.innerText = randomColor;

//   let div = document.querySelector(".displayColor");
//   div.style.backgroundColor = randomColor;
//   console.log("color Update");
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);

//   let color = `rgb( ${red}, ${blue}, ${green})`;
//   return color;
// }

// let h1 = document.querySelector("h1");
// h1.addEventListener("mouseout", (event) => {
//   console.log("mouseouted");
//   event.target.style.color = "red";
// });

// let inp = document.querySelector("input");
// let btn = document.querySelector("button");

// h1.addEventListener("click", () => {
//   h1.textContent = " click me For Loading";
// });

// let load = window.addEventListener("load", (event) => {
//   h1.innerText = "page was Loaded!";
// });

// load.setTimeout(() => {
//   h1.innerText = "Waiting....";
// }, 5000);

// inp.addEventListener("input", (event) => {
//   let keypressed = event.target.value;
//   h1.innerText = keypressed;
//   console.log(event);
// });

// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", (event) => {
//   console.log(event);
//   output.textContent = "Scroll event fired!";
//   setTimeout(() => {
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// });

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.appendChild(item);

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  item.appendChild(delbtn);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log(" delete");
  }
});

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", (e) => {
//     let par = e.target.parantElement;
//     console.log(par);
//     par.remove();
//   });
// }

// Event delegation for delete buttons
// ul.addEventListener("click", function (e) {
//   if (e.target.classList.contains("delete")) {
//     let li = e.target.parentElement;
//     li.remove();
//   }

const arr = [1, 2, 5, 5];

arr.push(6);

console.log(arr);
