let todoinput = document.getElementById("todo-input");
let addbutton = document.getElementById("add-button");
let todolist = document.getElementById("todo-list");
todolist.innerHTML=localStorage.getItem("data")

addbutton.addEventListener("click", function () {
  const todoText = todoinput.value;

  if (todoText === "") {
    alert("write something!");
    return;
  } 

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = todoText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  li.appendChild(span);
  li.appendChild(deleteBtn);

  todolist.appendChild(li);

  todoinput.value = "";
  savedata()
});
todolist.addEventListener("click", function (e) {
  

  if (e.target.tagName === "SPAN") {
    e.target.parentNode.classList.toggle("completed");
    savedata()
  }

  if (e.target.className === "delete-btn") {
    e.target.parentNode.remove();
    savedata()
    // localStorage.setItem("data",todolist.innerHTML)
  }
});

function savedata(){
  localStorage.setItem("data",todolist.innerHTML)
}