document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const taskForm = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    // User registration
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(registerForm);
        const userData = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        // Simulate API request
        console.log('Registering user:', userData);
        registerForm.reset();
    });

    // User login
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        const userData = {
            email: formData.get('email'),
            password: formData.get('password')
        };
        // Simulate API request
        console.log('Logging in user:', userData);
        loginForm.reset();
    });

    // Add task
    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(taskForm);
        const taskData = {
            title: formData.get('title'),
            due_date: formData.get('due_date'),
            priority: formData.get('priority')
        };
        // Simulate API request
        console.log('Adding task:', taskData);
        if (taskData.title && taskData.due_date && taskData.priority) {
            // Add task to the task list
            const listItem = document.createElement('li');
            listItem.textContent = `Title: ${taskData.title}, Due Date: ${taskData.due_date}, Priority: ${taskData.priority}`;
            taskList.appendChild(listItem);

            // Provide feedback to the user
            alert('Task added successfully!');
        } else {
            alert('Please fill in all fields.');
        }
        taskForm.reset();
    });

    // Display tasks (dummy data)
    const tasks = [
        { title: 'Task 1', due_date: '2024-04-10', priority: 'high' },
        { title: 'Task 2', due_date: '2024-04-15', priority: 'medium' },
        { title: 'Task 3', due_date: '2024-04-20', priority: 'low' }
    ];
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `Title: ${task.title}, Due Date: ${task.due_date}, Priority: ${task.priority}`;
        taskList.appendChild(listItem);
    });
});

