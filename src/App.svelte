<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
</script>

<style>
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<!-- template -->
<!-- div wrapper to allow css styling -->
<div class="App">
  <Router {routes} />
</div>
