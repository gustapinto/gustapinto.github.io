<script lang="ts">
  import projects from '$lib/assets/datasets/projects.json'
  import ProjectCard from './ProjectCard.svelte';
</script>

<div class="w-[95vw] md:w-[75vw] mx-auto">
  <div class="w-100 sm:grid sm:grid-cols-4 sm:gap-x-4">
    {#each projects as project}
      <ProjectCard
        url={project.link}
        title={project.title}
        icons={project.icons}
        content={project.text}
      />
    {/each}
  </div>
</div>
