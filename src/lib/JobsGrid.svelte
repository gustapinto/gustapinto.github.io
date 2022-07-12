<script lang="ts">
    import jobs from '$lib/datasets/jobs.json'
    import JobCard from './JobCard.svelte';
  </script>

  <div class="w-[95vw] md:w-[75vw] mx-auto">
    <div class="w-100 sm:grid sm:grid-cols-3 sm:gap-x-4">
      {#each jobs as job}
        <JobCard
          url={job.link}
          company={job.company}
          role={job.role}
          date={job.date}
          description={job.description}
          icons={job.icons}
        />
      {/each}
    </div>
  </div>
