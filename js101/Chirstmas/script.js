const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const result = document.getElementById("result");

btn1.addEventListener("click", function () {
  const valueOne = parseFloat(num1.value);
  const valueTwo = parseFloat(num2.value);
  result.textContent = valueOne * valueTwo;
});

btn2.addEventListener("click", function () {
  const valueOne = parseFloat(num1.value);
  const valueTwo = parseFloat(num2.value);
  result.textContent = valueOne / valueTwo;
});
