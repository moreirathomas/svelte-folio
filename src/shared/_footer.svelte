<script>
  import { links } from "../utils/utils.js";
</script>

<style lang="scss">
  footer {
    background: var(--color-background-accent);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .footer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
    width: var(--content-width);
    max-width: 100%;
    padding: var(--spacing) var(--spacing) var(--spacing-xl);

    h3 {
      margin: var(--spacing) 0;
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
    }
    .footer-card--contact .contact-links-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .footer-card--credits {
      a {
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        &:hover {
          color: var(--red);
        }
      }
    }
  }
  /* responsive */
  @media (max-width: 48rem) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- template -->

<footer>

  <div class="footer-grid">

    <div class="footer-card--contact">

      <h3>Contact me</h3>

      <ul class="contact-links-container">

        {#each links as link}
          <li>
            <a
              class="link-btn"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer">
              <i class={link.iconClassName} style="color: {link.iconColor}" />
              {link.name}
            </a>
          </li>
        {/each}

      </ul>

    </div>

    <div class="footer-card--credits">

      <h3>Made by me</h3>

      <ul>

        <li>With ⚡️ fun and ☕️ coffee.</li>

        <li>
          Using
          <a
            href="https://svelte.dev/"
            target="_blank"
            rel="noopener noreferrer">
            Svelte
          </a>
          and
          <a
            href="https://fontawesome.com/"
            target="_blank"
            rel="noopener noreferrer">
            Font Awesome
          </a>
          's icons.
        </li>

        <li>
          Also, you can check this app repository
          <a
            href="https://github.com/moreirathomas/svelte-routify-portfolio"
            target="_blank"
            rel="noopener noreferrer">
            here.
          </a>
        </li>
      </ul>

    </div>

  </div>

</footer>
