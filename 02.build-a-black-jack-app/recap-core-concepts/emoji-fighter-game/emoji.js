let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random 
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  let randomEmoji1 = fighters[Math.floor(Math.random() * fighters.length)]
  let randomEmoji2 = fighters[Math.floor(Math.random() * fighters.length)]
  stageEl.textContent = randomEmoji1 + " VS " + randomEmoji2

})