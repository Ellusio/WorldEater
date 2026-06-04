const sentences = [
"Whatever, Whomever, Whenever, I don't care.",
"No.",
"Okay.",
"Result not available in your region.",
"Did you mean?",
"The wind makes it colder.",
"You I boner.",
"I don't know.",
"GKas EIt Muva.",
"King.",
"Illuminati Pirate.",
"Yeah, this is a classic 'What the fuck just happened' moment.",
"冷頭鍋鎖.",
"It does this as the good work of a web of art for the country.",
"'Important to them.'",
"Forever @-@ Forever @-@ Forever @-@ Forever @-@ Forever",
"我他媽的做到了！哈哈哈哈",
"Stop",
"Exhale exhale exhale calm down",
];

const sentenceElement = document.getElementById("sentence");
const button = document.getElementById("Psychic");
const popups = document.querySelectorAll(".popup");

let lastIndex = -1;

function showRandomSentence() {

  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * sentences.length);
  } while (randomIndex === lastIndex);

  lastIndex = randomIndex;
  sentenceElement.textContent = sentences[randomIndex];
}

GenerateButton.addEventListener("click", () => {

  if (Math.random() < 0.25) { //25%
    
    popups.forEach(p => p.classList.remove("show"));

    const randomPopup = popups[Math.floor(Math.random() * popups.length)];
    randomPopup.classList.add("show");
  }
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove("show");
  });
})

showRandomSentence();

GenerateButton.addEventListener("click", showRandomSentence);

btn.addEventListener("click", () => {

const isAnyOpen = document.querySelector(".popup.show");

  // 
  if (isAnyOpen) return;

  if (Math.random() < 0.4) {
    
    popups.forEach(p => p.classList.remove("show"));

    const randomPopup = popups[Math.floor(Math.random() * popups.length)];
    randomPopup.classList.add("show");
  }
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.classList.remove("show");
  });
});