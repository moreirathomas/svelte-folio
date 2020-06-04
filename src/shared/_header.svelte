<script>
  import Link from "../components/_link.svelte";
  import { url, route } from "@sveltech/routify";

  // const path = window.location.pathname; // check current path to dynamically render h1 text
</script>

<style lang="scss">
  header {
    background: var(--color-background-accent);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  nav {
    width: var(--content-width);
    max-width: 100%;
    margin-top: var(--spacing);

    .nav-flex {
      padding: 0 calc(0.5rem + var(--spacing-xs));
      display: flex;
      flex-direction: row;

      .flex-grow {
        flex-grow: 1;
      }
    }
  }

  .header-content {
    width: var(--content-width);
    max-width: 100%;
    padding: var(--spacing);
    h1 {
      margin: var(--spacing) 0;
      font-size: var(--font-size-xxl);
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
    }
  }
</style>

<!-- template -->

<header>

  <nav>
    <ul class="nav-flex">
      <li>
        <Link path="/index" name="Home" />

      </li>
      <li>
        <Link path="/projects" name="Projects" />
      </li>
      <li class="flex-grow" />
      <!-- <li>
        <Link page={{ path: '#', name: 'Mode' }} />
      </li> -->
    </ul>
  </nav>

  <div class="header-content">

    {#if $route.path === '/index'}
      <h1>
        Hi 👋
        <br />
        I'm Thomas,
        <br />
        web developer student.
      </h1>
    {/if}

    {#if $route.path === '/projects'}
      <h1>
        Check out 👀
        <br />
        my projects.
      </h1>
    {/if}

  </div>

</header>
