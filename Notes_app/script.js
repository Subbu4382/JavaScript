let mainContainer = document.querySelector(".notes-container");
let btn = document.getElementById("btn");

mainContainer.innerHTML = localStorage.getItem("notes");

// Create new note
btn.addEventListener("click", function () {
  let inputBox = document.createElement("div");
  inputBox.className = "input-box";

  let noteText = document.createElement("p");
  noteText.setAttribute("contentEditable", "true");

  let deleteBtn = document.createElement("img");
  deleteBtn.className = "delete-btn";
  deleteBtn.src = "https://img.icons8.com/ios-glyphs/30/fa314a/trash.png";

  inputBox.appendChild(noteText);
  inputBox.appendChild(deleteBtn);
  mainContainer.appendChild(inputBox);

  savedata();
});

// Handle delete
mainContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    savedata();
  }
});

// Auto-save on typing
mainContainer.addEventListener("keyup", function () {
  savedata();
});

function savedata() {
  localStorage.setItem("notes", mainContainer.innerHTML);
}
