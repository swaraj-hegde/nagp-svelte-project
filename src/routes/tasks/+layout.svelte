<script>
  export let data;
</script>

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/tasks">Task Manager</a>
  </nav>
</header>

<main>
  <slot />
</main>

<style>
  header {
    background: linear-gradient(135deg, #000428 0%, #004e92 100%);
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
  }
  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    margin: 0 1rem;
  }
  nav a:hover {
    text-decoration: underline;
  }
  main {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
</style>
