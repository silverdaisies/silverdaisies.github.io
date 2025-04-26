// script.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("myBtn");
  const output = document.getElementById("output");

  btn.addEventListener("click", () => {
    const now = new Date().toLocaleTimeString();
    output.textContent = `Current time: ${now}`;
  });
}); 