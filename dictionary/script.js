const url = "https://api.dictionaryapi.dev/api/v2/entries/en/fart";
let result = document.getElementById("result");
let sound = document.getElementById("sound");
let btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inp_word = document.getElementById("inp-word").value;
  fetch(`${url}${inp_word}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  result.innerHTML = `<div class="word">
                <h3>${inp_word}</h3>
                <button onclick="playsound">listen</button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}</p>
            </div>
            <p class="word-meaning">
               ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;
  sound.setAttribute("src", `https${data[0].phonetics[0].audio}`);
});

function playsound() {
  sound.play();
}
