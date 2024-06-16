<script>
  import { userStore } from '$lib/userStore';
  import { get } from 'svelte/store';
  
  const { subscribe } = userStore;
  let user;

  
  subscribe(value => {
    user = value.user;
  });
</script>

<div class="user-profile">
  <h2>User Profile</h2>
  <p><strong>Name:</strong> {user.name}</p>
  <p><strong>Email:</strong> {user.email}</p>
</div>

<style>
  .user-profile {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
  }
  .user-profile h2 {
    margin: 0 0 0.5rem 0;
  }
  .user-profile p {
    margin: 0.5rem 0;
  }
</style>
