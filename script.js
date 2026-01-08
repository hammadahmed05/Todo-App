/* ================= CLOCK ================= */
function updateClock() {
    const now = new Date();

    let h = String(now.getHours()).padStart(2, "0");
    let m = String(now.getMinutes()).padStart(2, "0");
    let s = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ================= TODO APP ================= */
function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");
    li.classList.add("task");

    const span = document.createElement("span");
    span.innerText = text;
    span.onclick = () => span.classList.toggle("done");

    /* EDIT BUTTON */
    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    editBtn.className = "edit-btn";

    editBtn.onclick = () => {
        const newText = prompt("Edit your task:", span.innerText);
        if (newText !== null && newText.trim() !== "") {
            span.innerText = newText;
        }
    };

    /* DELETE BUTTON */
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.className = "delete-btn";

    delBtn.onclick = () => {
        li.classList.add("fade-out");
        setTimeout(() => li.remove(), 300);
    };

    const btnBox = document.createElement("div");
    btnBox.className = "btn-box";
    btnBox.append(editBtn, delBtn);

    li.append(span, btnBox);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
