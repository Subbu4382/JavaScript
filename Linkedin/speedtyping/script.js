let user_input = document.getElementById("input");
let sentence = document.getElementById("sentence");
let resultsDisplay = document.getElementById("results");

let char = sentence.textContent;
let startTime = 0;
let typedCorrect = 0;
let isFirstKeypress = true;


// user_input.disabled = true;
sentence.innerHTML = char
  .split("")
  .map((e) => `<span>${e}</span>`)
  .join("");
let typed = "";

document.body.addEventListener("keyup", function (e) {
  if (isFirstKeypress && e.key.length === 1) {
    startTime = new Date().getTime();
    isFirstKeypress = false;
  }

  let ch_ele = document.querySelectorAll("span");

  if (e.key.length === 1) {
    typed += e.key;
  } else if (e.key === "Backspace") {
    typed = typed.slice(0, -1);
  }

  typedCorrect = 0;


  for (let i = 0; i < ch_ele.length; i++) {
    if (typed[i] == null) {
      ch_ele[i].style.color = "black";
    } else if (typed[i] == ch_ele[i].textContent) {
      // console.log(user_input.value[i], char[i], "hello");
      ch_ele[i].style.color = "green";
     typedCorrect++;
    } else {
      ch_ele[i].style.color = "red";
    }
  }
  
      calculateResults();
    
});

function calculateResults() {
  const endTime = new Date().getTime();
  const timeTaken = (endTime - startTime) / 1000; // time in seconds
  const totalCharacters = char.length;
  const accuracy = ((typedCorrect / totalCharacters) * 100).toFixed(2);
  // Simple WPM calculation: (characters / 5) / time in minutes
  const wordsTyped = typedCorrect / 5;
  const wpm = (wordsTyped / (timeTaken / 60)).toFixed(2);

  resultsDisplay.innerHTML = `
    <p>Time: ${timeTaken.toFixed(2)} seconds</p>
    <p>Accuracy: ${accuracy}%</p>
    <p>WPM: ${wpm}</p>
  `;
}
