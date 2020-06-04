<script>
  export let name;
  export let description;
  export let language;
  export let repoUrl;
  export let homepage;

  import { languages, getColor } from "../utils/utils.js";

  let imgSrc = `./images/${name}.png`; // need to manually name the png same as the repo
</script>

<style lang="scss">
  .project-card {
    background-color: var(--color-background-compo);
    border-radius: var(--radius);
    height: max-content;

    transition: transform ease-in-out 0.2s;

    .project-card--thumbnail,
    img {
      border-top-left-radius: var(--radius);
      border-top-right-radius: var(--radius);
    }
    .project-card--content {
      padding: var(--spacing-xs);
      h3 {
        margin-bottom: var(--spacing-xs);
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: var(--font-size-xl);
      }
      .lang-tags-list {
        .lang-tag {
          height: 2rem;
          margin: 0.5rem;
          padding: 0 var(--spacing-xs);
          border-radius: var(--radius);

          display: inline-flex;
          align-items: center;
          justify-content: center;

          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: var(--font-size-xs);
        }
      }
    }
    &:hover {
      transform: scale(1.015);
      box-shadow: var(--shadow-accent);
      h3 {
        color: var(--red);
      }
    }
  }
  // tooltip on hover
  a[aria-label]:hover::after {
    content: attr(aria-label);
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-family: "Monserrat", sans-serif;
    font-weight: 700;
    height: 2rem;
    margin: 0.5rem;
    padding: 0 var(--spacing-xs);
    border-radius: var(--radius);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: var(--color-background-accent);
    box-shadow: var(--shadow);
  }
  // no link where no homepage
  a.disabled {
    cursor: not-allowed;
  }
  // to position to aria-label correctly
  .link-wrapper {
    position: relative;
  }
</style>

<!-- template -->

<article class="project-card">

  <div class="link-wrapper">

    <a
      href={homepage}
      target="_blank"
      aria-label={homepage === '' ? 'Not online ✖︎' : 'See website ➜'}
      class:disabled={homepage === ''}
      on:click={event => {
        if (homepage === '') event.preventDefault();
      }}>

      <div class="project-card--thumbnail">
        <img
          src={imgSrc}
          alt="thumbnail"
          onerror="this.onerror=null; this.src='./images/default.png'" />
      </div>

    </a>

  </div>

  <div class="project-card--content link-wrapper">

    <a href={repoUrl} target="_blank" aria-label="See repository ➜">

      <h3>{name}</h3>
      <p>{description}</p>

      <div class="lang-tags-list">
        <!-- 2 hex numbers appended at the end of the code : opacity -->
        <span
          class="lang-tag"
          style="color:{getColor(language)}; background:{getColor(language) + '40'}
          ">
          {language}
        </span>
      </div>
    </a>

  </div>

</article>
