let ajoute = [];

function addTask() {
    const ajoutInput = document.getElementById("ajoutInput");
    const ajouText = ajoutInput.value.trim();

    if (ajouText === "") {
        alert("Veuillez entrer une tache valide");
        return;
    }

    ajoute.push({
        text: ajouText,
        status: "to do"
    });

    ajoutInput.value = "";
    displayTasks();
}

function changeStatus(index, status) {
    ajoute[index].status = status;
    displayTasks();
}

function deleteTask(index) {
    ajoute.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    const ajoutList = document.getElementById("ajoutList");
    ajoutList.innerHTML = "";   

    ajoute.forEach((ajout, index) => {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";

        const ajouText = document.createTextNode(ajout.text);
        listItem.appendChild(ajouText);

        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group float-right";

        const toDoBtn = document.createElement("button");
        toDoBtn.className = "btn btn-danger";
        toDoBtn.innerText = "To Do";
        toDoBtn.onclick = () => changeStatus(index, "to do");
        btnGroup.appendChild(toDoBtn);

        const doingBtn = document.createElement("button");
        doingBtn.className = "btn btn-warning";
        doingBtn.innerText = "Doing";
        doingBtn.onclick = () => changeStatus(index, "doing");
        btnGroup.appendChild(doingBtn);

        const doneBtn = document.createElement("button");
        doneBtn.className = "btn btn-success";
        doneBtn.innerText = "Done";
        doneBtn.onclick = () => changeStatus(index, "done");
        btnGroup.appendChild(doneBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-secondary";
        deleteBtn.innerText = "Supprimer";
        deleteBtn.onclick = () => deleteTask(index);
        btnGroup.appendChild(deleteBtn);

        listItem.appendChild(btnGroup);

        if (ajout.status === "to do") {
            listItem.style.backgroundColor = "red";
        } else if (ajout.status === "doing") {
            listItem.style.backgroundColor = "orange";
        } else if (ajout.status === "done") {
            listItem.style.backgroundColor = "green";
        }

        ajoutList.appendChild(listItem);
    });
}

displayTasks();