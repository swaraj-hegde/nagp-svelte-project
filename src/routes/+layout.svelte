<script>
  import { userStore, logout } from '$lib/userStore';
  import { get } from 'svelte/store';
  let user;
  let isAuthenticated = false;

  userStore.subscribe(value => {
    isAuthenticated = value.isAuthenticated;
    user = value.user;
  });

  function handleLogout() {
    logout();
  }
</script>

<header>
  <nav>
    <img src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Nagarro%20green%20logo%20with%20white%20title.svg" alt="Logo" class="logo"/>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/tasks">Task Manager</a></li>
    </ul>
    {#if isAuthenticated}
      <button class="logout-button" on:click={handleLogout}>Logout</button>
    {/if}
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>&copy; 2024 Personal Task Manager</p>
</footer>

<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: url('/nagarro.jpg') no-repeat center center fixed;
    background-size: cover;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  header {
    background: linear-gradient(135deg, #000428 0%, #004e92 100%);
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    height: 50px;
  }
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  .logout-button {
    padding: 0.5rem 1rem;
    background-color: #004e92;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }
  .logout-button:hover {
    background-color: #003f7f;
  }
  footer {
    background: linear-gradient(135deg, #000428 0%, #004e92 100%);
    color: white;
    text-align: center;
    padding: 1rem;
    position: sticky;
    bottom: 0;
    width: 100%;
  }
  main {
    padding: 2rem;
    flex: 1;
    background: rgba(255, 255, 255, 0.8); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 2rem auto;
    width: 90%;
    max-width: 1200px;
    border-radius: 8px;
    overflow-y: auto;
  }
</style>
