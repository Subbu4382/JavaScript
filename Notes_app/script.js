let mainContainer = document.querySelector(".notes-container");
let btn = document.getElementById("btn");
let notes = document.querySelectorAll(".input-box");
mainContainer.innerHTML = localStorage.getItem("notes");

btn.addEventListener("click", function () {
  let inputbox = document.createElement("p");
  let notebutton = document.createElement("img");
  notebutton.className = "delete-btn";
  notebutton.src = "https://img.icons8.com/ios-glyphs/30/fa314a/trash.png"; // Trash image icon
  inputbox.className = "input-box";
  inputbox.setAttribute("contentEditable", true);
  mainContainer.appendChild(inputbox).appendChild(notebutton);
  savedata();
});

mainContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    savedata();
  }
});
mainContainer.addEventListener("keyup", function () {
    savedata();
  });
function savedata() {
  localStorage.setItem("notes", mainContainer.innerHTML);
}
