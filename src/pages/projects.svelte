<script>
  import { onMount } from "svelte";

  import Header from "../components/_header.svelte";
  import Footer from "../components/_footer.svelte";
  import ProjectCard from "../components/_projectCard.svelte";

  const apiUrl =
    "https://api.github.com/users/moreirathomas/repos?sort=created";

  let repos = [];

  onMount(async () => {
    const res = await fetch(apiUrl);
    const serverData = await res.json();

    // do not include this portfolio repo and do not include the github readme
    const filteredRepos = serverData.filter(
      repo =>
        repo.name !== "svelte-routify-portfolio" &&
        repo.name !== "moreirathomas"
    );

    repos = filteredRepos.map(repo => {
      const { name, description, language, html_url, homepage } = repo;
      return { name, description, language, html_url, homepage };
    });
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
        <ProjectCard {repo} />
      {/each}

    </div>

  </section>

</main>

<Footer />
