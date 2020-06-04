<script>
  import { url } from "@sveltech/routify";
  import { route } from "@sveltech/routify";
</script>

<style lang="scss">
  main {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      margin-bottom: var(--spacing);
      font-size: var(--font-size-xxl);
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
    }
    code {
      background: var(--red);
      padding: 0 0.2rem;
      font-weight: 700;
      border-radius: 4px;
    }
  }
</style>

<!-- template -->

<main>
  <h1>Oops, 404</h1>

  <p>
    Path
    <code>/{$route.leftover}</code>
    doesn't exist 🦄
  </p>

  <a class="link-btn" href={$url('/')}>
    <i class="fas fa-home" style="color: var(--white)" />
    Back to homepage
  </a>
</main>
