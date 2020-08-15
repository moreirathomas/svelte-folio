<script>
  import { onMount } from "svelte";

  import Header from "../shared/_header.svelte";
  import Footer from "../shared/_footer.svelte";
  import ProjectCard from "../components/_projectCard.svelte";

  const apiUrl =
    "https://api.github.com/users/moreirathomas/repos?sort=created";

  let repos = [];

  onMount(async () => {
    const res = await fetch(apiUrl);
    const unfilteredRepos = await res.json();

    repos = unfilteredRepos.filter(
      repo => repo.name !== "svelte-routify-portfolio" && repo.name !== "moreirathomas"
    ); // do not include this portfolio repo or infinite loop of links target blank and do not include the github readme (useless + language = null)
    // possible refacto : destructuring the array to pass {...repo} in <ProjectCard /> instead of each prop
  });
</script>

<style lang="scss">
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: var(--spacing);
    width: var(--content-width);
    max-width: 100%;
  }
  @media (max-width: 48rem) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- template -->
<Header />

<main>

  <section class="projects">
    {#if repos && repos.length}
      <h2>{repos.length} projects</h2>
    {:else}
      <h2>Fetching GitHub API, response incoming !</h2>
    {/if}
    <div class="projects-grid">

      {#each repos as repo}
        <ProjectCard
          name={repo.name}
          description={repo.description}
          language={repo.language}
          repoUrl={repo.html_url}
          homepage={repo.homepage} />
      {/each}

    </div>

  </section>

</main>

<Footer />
