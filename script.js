/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ================= TYPING ANIMATION ================= */

/* 🔽 CHANGE WORDS HERE */
const words = [
  "Web Designer",
  "Frontend Developer",
  "Creative Problem Solver",
  "UI/UX Designer",
  "Graphic Designer",
];

let wordIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function typeText() {
  if (charIndex < words[wordIndex].length) {
    typingElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100);
  } else {
    setTimeout(deleteText, 2000);
  }
}

function deleteText() {
  if (charIndex > 0) {
    typingElement.textContent =
      words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeText, 500);
  }
}

typeText();

/* ================= CONTACT FORM (FRONTEND ONLY) ================= */
document.querySelector(".contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully!");
});

 
