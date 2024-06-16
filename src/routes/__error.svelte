<script context="module">
  export async function load({ status }) {
    if (status === 404) {
      return {
        status: 404,
        error: new Error('Page Not Found')
      };
    }

    return {
      status: 500,
      error: new Error('Internal Server Error')
    };
  }
</script>

<script>
  export let status;
  export let error;
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<main>
  <div class="error-container">
    <h1>{status}</h1>
    <p>Page not found!</p>
    {#if status === 404}
      <p>Oh no! The page you are looking for has been moved.</p>
      <p>
        Please check these pages instead:
        <a href="/">Homepage</a>,
        <a href="/about">About</a>,
        <a href="/tasks">Task Manager</a>
      </p>
    {/if}
    <p>For any specific issues, you can write to us at <a href="mailto:info@nagp.com">info@nagp.com</a>.</p>
  </div>
</main>

<style>
  main {
    padding: 2rem;
    text-align: center;
  }
  .error-container {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  a {
    color: #004e92;
    text-decoration: none;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
