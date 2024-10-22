const texts = [
  "Welcome to our website!",
  "We provide amazing services.",
  "Join us today!",
  "Don't miss our latest updates.",
];

let currentIndex = 0;

function showNextText() {
  const textSlider = document.getElementById("text-slider");

  // Remove active class from the current text
  textSlider.classList.remove("active");

  // Update the text content
  currentIndex = (currentIndex + 1) % texts.length;
  textSlider.textContent = texts[currentIndex];

  // Trigger reflow to reset the transition
  void textSlider.offsetWidth; // This forces a reflow

  // Add active class to the new text
  textSlider.classList.add("active");
}

// Show the first text immediately
textSlider.textContent = texts[currentIndex];
textSlider.classList.add("active");

// Change text every 3 seconds
setInterval(showNextText, 3000);
