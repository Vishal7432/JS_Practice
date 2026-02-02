// setTimeout(function () {
{
  // console.log("This is Ayush"); // ye code kuch time ke baad run karta hai wobhi ek baar but interval me nahi wo time ke baad chalta rahta hai
}
// }, 2000);

const sayVishal = () => {
  console.log("this is Vishal");
};

const changeH1 = () => {
  document.querySelector("h1").innerHTML = "This is Best Js series";
};

const changeMe = setTimeout(changeH1, 2000);

// if you want to stop setTimeout use clearTimeout

document.querySelector("#stop").addEventListener("click", function () {
  clearTimeout(changeMe);
  console.log("STOPPED");
});
