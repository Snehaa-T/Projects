function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>`;

        // Add an event listener to the delete button
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", deleteTask);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(event) {
    const taskList = document.getElementById("taskList");
    const li = event.target.parentElement;
    taskList.removeChild(li);
}

// Add event listener for adding a task
const addTaskButton = document.getElementById("addTask");
addTaskButton.addEventListener("click", addTask);

// Add event listener for pressing Enter key
const taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});