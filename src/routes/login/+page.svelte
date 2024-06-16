<script>
  import { login } from '$lib/userStore';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';

  function handleLogin() {
    const dummyUser = {
      email: 's',
      password: 's',
      name: 'John Doe'
    };

    if (email === dummyUser.email && password === dummyUser.password) {
      login({ name: dummyUser.name, email: dummyUser.email });
      goto('/tasks'); 
    } else {
      alert('Invalid email or password');
    }
  }
</script>

<div class="login-container">
  <h1>Login</h1>
  <label>
    Email:
    <input type="email" bind:value={email} required />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>
  <button on:click={handleLogin}>Login</button>
</div>

<style>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  .login-container h1 {
    margin-bottom: 1rem;
  }
  .login-container label {
    display: block;
    margin: 1rem 0;
    font-weight: bold;
  }
  .login-container input {
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .login-container button {
    padding: 0.75rem 1.5rem;
    background-color: #004e92;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 1rem;
  }
  .login-container button:hover {
    background-color: #003f7f;
  }
</style>
