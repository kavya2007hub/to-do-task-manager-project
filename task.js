let count = 0;

function addTask() {

    let task = document.getElementById("taskInput").value;

    if(task == "") {
        alert("Enter a Task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerHTML = task;

    let completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    completeBtn.className = "complete-btn";

    completeBtn.onclick = function() {
        span.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function() {
        li.remove();

        count--;
        document.getElementById("taskCount").innerHTML = count;
    };

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    count++;
    document.getElementById("taskCount").innerHTML = count;

    document.getElementById("taskInput").value = "";
}