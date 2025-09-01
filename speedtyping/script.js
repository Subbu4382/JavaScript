let user_input = document.getElementById("input");
let sentence = document.getElementById("sentence");
user_input.addEventListener("keyup", function (e) {
  let char = sentence.textContent;
  for (let i = 0; i < char.length; i++) {
    if (user_input.value[i] == char[i]) {
      // sentence.style.color="green"
    }
  }
});
