const Todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".Todo-list");
const descinput = document.querySelector(".desc-input");

todobutton.addEventListener("click", addTodo);
todolist.addEventListener("click", supprTodo);

function addTodo(e) {
    e.preventDefault();
    const tododiv = document.createElement("div");
    tododiv.classList.add("todo");
    const newto = document.createElement("li");
    newto.innerText = Todoinput.value;
    newto.classList.add("todo-item");
    tododiv.appendChild(newto);

    const supprbutton = document.createElement("button");
    supprbutton.innerHTML = '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>'
    supprbutton.classList.add("suppr-btn");
    tododiv.appendChild(supprbutton);

    todolist.appendChild(tododiv);
    Todoinput.value = "";
}

function supprTodo(e) {
   const suppr = e.target;
    if (suppr.classList[0] === "suppr-btn") {
        const todo = suppr.parentElement;
        todo.remove();
    }

}