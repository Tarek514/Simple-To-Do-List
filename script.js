document.getElementById("addButton").addEventListener("click", addTodo);
document
  .getElementById("todoInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTodo();
    }
  });

function addTodo() {
  const input = document.getElementById("todoInput");
  const todoText = input.value.trim();

  if (todoText === "") return;

  const li = document.createElement("li");
  li.textContent = todoText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteButton);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
}
