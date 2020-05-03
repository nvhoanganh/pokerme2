<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<main class="container shadow-lg mx-auto">
  <Router {routes} />
</main>
