<script lang="ts">
  import ClickableCard from './templates/ClickableCard.svelte'

  export let url: string
  export let title: string
  export let icons: string
  export let content: string
</script>

<ClickableCard url={url}>
  <div class="-skew-y-2">
    <div class="w-100 text-center">
      <h1 class="font-semibold text-xl mb-4">
        {title}
      </h1>

      {#each icons as icon}
        {@html icon}
      {/each}
    </div>

    <p>
      {content}
    </p>
  </div>
</ClickableCard>
