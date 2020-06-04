<script>
  import { isActive, url } from "@sveltech/routify";

  export let path;
  export let name;
</script>

<style lang="scss">
  // :global is dope
  :global(.link-btn) {
    height: 3rem;
    max-width: max-content;
    padding: 0 var(--spacing-xs);
    margin: 0.5rem;
    border-radius: var(--radius-xl);

    display: inline-flex;
    justify-content: center;
    align-items: center;

    background: var(--color-background-compo);
    box-shadow: var(--shadow);

    color: var(--white);
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    transition: transform ease-in-out 0.2s;
    &:hover {
      transform: scale(1.015);
      color: var(--red);
      box-shadow: var(--shadow-accent);
    }
    &:active {
      transform: translateY(1px);
    }
    &.active {
      color: var(--red);
    }
  }
</style>

<!-- template -->

<a class="link-btn" href={$url(path)} class:active={$isActive(path)}>{name}</a>
