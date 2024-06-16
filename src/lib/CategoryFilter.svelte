<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function filterCategory(event) {
    dispatch('filter', event.target.value);
  }
</script>

<div class="category-filter">
  <label for="category">Filter by Status:</label>
  <select id="category" on:change={filterCategory}>
    <option value="">All</option>
    <option value="Complete">Complete</option>
    <option value="Incomplete">Incomplete</option>
  </select>
</div>

<style>
  .category-filter {
    margin-bottom: 1rem;
  }
  .category-filter label {
    font-weight: bold;
  }
  .category-filter select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
</style>
