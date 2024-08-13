const todoInput = document.getElementById("input-todo");
const add = document.getElementById("add-btn");

add.addEventListener('click', (event) => {
    event.preventDefault();

    if(todoInput.value == '') {
        alert("write something");
    } else {
        createToDoList();
        todoInput.value = '';
    }
});

function createToDoList() {
    // container for task
    let div = document.getElementById("task");

    // create new ul element
    let ul = document.createElement("ul");

    //create p tag for mark task as complete
    let p = document.createElement("p");
    p.classList.add("mark");
    p.innerHTML = "<h3>&#10066;</h3>";
    ul.appendChild(p);

    // This is li element 
    let li = document.createElement("li");
    li.textContent = todoInput.value;
    ul.appendChild(li);

    // create button for delete task
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = "<h3>&#10060;</h3>";
    ul.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        ul.remove();
    })

    //create a new div for align li and delete button
    let alignText = document.createElement("div");
    alignText.classList.add("text-alignment");
    alignText.appendChild(li);
    alignText.appendChild(deleteBtn);
    ul.appendChild(alignText);
    task.appendChild(ul);

    // mark task as complete
    p.addEventListener("click", () => {
        p.innerHTML = "<h3>&#9989;</h3>";
        li.style.color = "#777";
        li.style.textDecoration = "line-through";
        ul.style.cursor = "pointer";
    });

    ul.addEventListener("dblclick", () => {
        p.innerHTML = "<h3>&#10066;</h3>";
        li.style.color = "#000";
        li.style.textDecoration = "none";
    });
}