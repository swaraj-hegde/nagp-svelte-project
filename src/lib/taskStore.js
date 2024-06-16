import { writable } from 'svelte/store';
import { fetchTasks } from './api';

const taskStore = writable([]);

const loadTasks = async() => {
    try {
        const tasks = await fetchTasks();
        taskStore.set(tasks);
    } catch (error) {
        console.error('Failed to load tasks:', error);
    }
};

const addTask = (task) => {
    taskStore.update((tasks) => [...tasks, {...task, id: tasks.length + 1 }]);
};

const updateTask = (updatedTask) => {
    taskStore.update((tasks) =>
        tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
};

const deleteTask = (id) => {
    taskStore.update((tasks) => tasks.filter((task) => task.id !== id));
};

export { taskStore, loadTasks, addTask, updateTask, deleteTask };