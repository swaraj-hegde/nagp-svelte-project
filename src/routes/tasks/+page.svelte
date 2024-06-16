<script>
  import TaskForm from '$lib/TaskForm.svelte';
  import TaskCard from '$lib/TaskCard.svelte';
  import CategoryFilter from '$lib/CategoryFilter.svelte';
  import UserProfile from '$lib/UserProfile.svelte';
  import { taskStore, loadTasks } from '$lib/taskStore';
  import { userStore, loadUser } from '$lib/userStore';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let tasks = [];
  let selectedCategory = '';
  let currentTask = { id: null, title: '', description: '', status: '', dueDate: '' };
  let user;
  let isAuthenticated = false;
  let sortOption = 'dueDate';

  onMount(async () => {
    const unsubscribeUser = userStore.subscribe((value) => {
      isAuthenticated = value.isAuthenticated;
      user = value.user;
      if (!isAuthenticated) {
        goto('/login');
      }
    });

    if (isAuthenticated) {
      await loadTasks();
      const unsubscribeTasks = taskStore.subscribe((value) => {
        tasks = value;
      });

      return () => {
        unsubscribeTasks();
        unsubscribeUser();
      };
    }
  });

  function addTask(newTask) {
    currentTask = { id: null, title: '', description: '', status: '', dueDate: '' };
  }

  function editTask(task) {
    currentTask = task;
  }

  function saveTask() {
    currentTask = { id: null, title: '', description: '', status: '', dueDate: '' };
  }

  function filterTasks(category) {
    selectedCategory = category;
  }

  function sortTasks(option) {
    sortOption = option;
  }

  $: filteredTasks = tasks.filter((task) =>
    selectedCategory ? task.status === selectedCategory : true
  ).sort((a, b) => sortOption === 'dueDate' ? new Date(a.dueDate) - new Date(b.dueDate) : 0);
</script>

{#if isAuthenticated}
  <h1>Task Manager</h1>
  <p>Manage your tasks here.</p>

  <UserProfile />

  <CategoryFilter {selectedCategory} on:filter={(event) => filterTasks(event.detail)} />

  <label for="sort">Sort by:</label>
  <select id="sort" on:change="{(event) => sortTasks(event.target.value)}">
    <option value="dueDate">Due Date</option>
  </select>

  <TaskForm task={currentTask} on:save={saveTask} />

  {#each filteredTasks as task}
    <TaskCard {task} on:edit={(event) => editTask(event.detail)} />
  {/each}
{:else}
  <p>Redirecting to login...</p>
{/if}

<style>
  .tasks-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }
  label {
    font-weight: bold;
  }
  select {
    margin-left: 0.5rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
