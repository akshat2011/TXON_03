const input = document.getElementById('new-task');
const button = document.getElementById('add-task');
const list = document.getElementById('task-list');
button.addEventListener('click', () => {
    const task = input.value;
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';
    }
});
list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        const li = event.target.parentElement;
        list.removeChild(li);
    }
});
