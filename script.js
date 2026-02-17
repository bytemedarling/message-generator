console.log("JS is connected!");

const affirmations = [
  "I am becoming stronger every day.",
  "I am where I am meant to be.",
  "I am brave, bold, and confident.",
  "I deserve healthy relationships.",
  "I release jealousy and comparing myself to others.",
  "I am effortlessly attracting health, wealth, happiness, and love.",
  "I am strong enough to rise above negative thoughts.",
  "I am a survivor, a warrior, and a fighter.",
  "I am made of power, strength, and resilience."
];

const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  message.textContent = affirmations[randomIndex];
});