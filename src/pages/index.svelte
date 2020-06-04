<script>
  import Header from "../shared/_header.svelte";
  import Footer from "../shared/_footer.svelte";
  import Link from "../components/_link.svelte";

  import { skills } from "../utils/utils.js";
</script>

<style lang="scss">
  .skills-flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .skill-tag {
      height: 2rem;
      max-width: max-content;
      margin: 0.5rem;
      padding: 0 var(--spacing-xs);
      border-radius: var(--radius);

      display: inline-flex;
      justify-content: center;
      align-items: center;

      font-family: "Montserrat", sans-serif;
      font-weight: 700;

      background: var(--color-background-compo);
      box-shadow: var(--shadow);

      cursor: default;

      &.animate {
        animation: bounce 1s ease-in-out 1;
      }
    }
  }
  // animation .skill-tag
  @keyframes bounce {
    16.65% {
      transform: translateY(8px);
    }
    33.3% {
      transform: translateY(-6px);
    }
    49.95% {
      transform: translateY(4px);
    }
    66.6% {
      transform: translateY(-2px);
    }
    83.25% {
      transform: translateY(1px);
    }
    100% {
      transform: translateY(0);
    }
  }
  // global for same style in projects.svelte as the structure is shared
  :global(main) {
    width: var(--content-width);
    max-width: 100%;
    padding: var(--spacing);
    :global(section) {
      margin: var(--spacing) 0;
      :global(h2) {
        margin-bottom: var(--spacing);
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: var(--font-size-xl);
      }
    }
    :global(p) {
      margin-bottom: var(--spacing-xs);
    }
  }
</style>

<!-- template -->
<Header />

<main>

  <section class="about">

    <h2>About me</h2>
    <p>I'm a French 3rd year student at HETIC, I recently moved to Paris 🇫🇷</p>
    <p>
      I'm currently learning and coding my way to become a fullstack developer
      🚀
    </p>
    <p>
      I'm in love with science, tech , philosophy, video games and good food.
      <br />
      So, if you're wondering what I'm doing right now, the answer is probably
      searching and learning about new stuff to build awsome things ! Either
      that or playing video game or cooking diner.
    </p>

  </section>

  <section class="skills">

    <h2>My skills</h2>
    <p>A non exhaustive list of stuff I play with.</p>

    <ul class="skills-flex-container">
      {#each skills as skill (skills.indexOf(skill))}
        <li>
          <span
            key={skills.indexOf(skill)}
            class="skill-tag"
            style="color:{skill.color}"
            on:mouseenter={event => {
              if (!skill.isHovered) skill.isHovered = true;
            }}
            on:mouseleave={setTimeout(() => (skill.isHovered = false), 1000)}
            class:animate={skill.isHovered}>
            {skill.name}
          </span>
        </li>
      {/each}
    </ul>

  </section>

  <section class="projects">

    <h2>My projects</h2>
    <p>
      Have a sneak peek of what I have been or am working on. It is a
      colllection of my public repositories, made available using the GitHub API
      !
    </p>
    <Link path="/projects" name="Take a look" />

  </section>

</main>
<Footer />
