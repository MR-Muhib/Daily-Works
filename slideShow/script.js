const slideShowElement = document.querySelectorAll(".slide__Content");

let countElement = 0;
const id = setInterval(() => {
  countElement++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (countElement > slideShowElement.length - 1) {
    slideShowElement[0].classList.add("current");
    countElement = 0;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);

/* const slideShowElement = document.querySelectorAll(".slide__Content");

let countElement = 0;
const id = setInterval(() => {
  countElement++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (countElement > slideShowElement.length - 1) {
    slideShowElement[0].classList.add("current");
    countElement = 0;
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);
 */
