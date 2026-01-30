const Form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)
// kyunki ye form ke bahar hai aur jab ye line execute hogi tab form ke andar kuch bhi nahi hoga isliye ye empty milega

Form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const Hieght = parseInt(document.querySelector("#height").value);
  const Weight = parseInt(document.querySelector("#weight").value);
  const Result = document.querySelector("#results");

  if (isNaN(Hieght) || Hieght <= 0 || Hieght === "") {
    Result.innerHTML = `Please enter valid positive numbers for height ${Hieght} .`;
  } else if (isNaN(Weight) || Weight <= 0 || Weight === "") {
    Result.innerHTML = `Please enter valid positive numbers for weight ${Weight} .`;
  } else {
    const BMI = (Weight / ((Hieght * Hieght) / 10000)).toFixed(2);
    // Result.innerHTML = `<span>Your BMI is ${BMI}</span>. `;

    let category = "";

    if (BMI < 18.5) {
      category = "Underweight";
    } else if (BMI >= 18.5 && BMI < 24.9) {
      category = "Normal weight";
    } else if (BMI >= 25 && BMI < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }
    Result.innerHTML = `<span>Your BMI is ${BMI} (${category})</span>`;
  }
});
