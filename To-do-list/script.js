let todoinput = document.getElementById("todo-input");
let addbutton = document.getElementById("add-button");
let todolist = document.getElementById("todo-list");

addbutton.addEventListener("click", function () {
  const todoText = todoinput.value;

  if (todoText === "") {
    alert("You must write something!");
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
});
todolist.addEventListener("click", function (event) {
  const clickedElement = event.target;

//   if (clickedElement.tagName === "SPAN") {
//     clickedElement.parentNode.classList.toggle("completed");
//   }

  if (clickedElement.className === "delete-btn") {
    clickedElement.parentNode.remove();
  }
});
