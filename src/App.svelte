<script>
  import { Router } from "svelte-router-spa";
  import { routes } from "./routes";
</script>

<main class="container shadow-lg mx-auto h-full text-center font-mono">
  <div class="text-4xl py-8 font-mono">Planning Poker</div>
  <Router {routes} />
</main>
