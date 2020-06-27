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
      text-align: center;
    }
    code {
      background: var(--red);
      padding: 0 0.2rem;
      font-weight: 700;
      border-radius: 4px;
    }
    .back-links-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
</style>

<!-- template -->

<main>
  <h1>Oops, error 404</h1>

  <p>
    Path
    <code>/{$route.leftover}</code>
    doesn't exist here 🦄
  </p>

  <ul class="back-links-container">
    <li>
      <a class="link-btn" href={$url('/')}>
        <i class="fas fa-home" style="color: var(--white)" />
        Back to homepage
      </a>
    </li>
    <li>
      <a class="link-btn" href={$url('/playground')}>
        <i class="fas fa-puzzle-piece" style="color: var(--white)" />
        Back to playground
      </a>
    </li>
  </ul>

</main>
