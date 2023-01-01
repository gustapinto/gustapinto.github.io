<script lang="ts">
  import ClickableCard from './templates/ClickableCard.svelte'

  export let url: string
  export let company: string
  export let role: string
  export let date: string
  export let description: string
  export let icons: Array<any>
</script>

<ClickableCard url="{url}">
  <div class="-skew-y-2">
    <div class="w-100 text-center">
      <h1 class="font-semibold text-xl block">
        <a href="{url}">
          {company}
        </a>
      </h1>

      <div class="my-4">
        <p class="text-sm font-bold">
          {role}
        </p>
        <p class="text-xs mt-[-0.2rem]">
          {date}
        </p>
      </div>

      <div class="my-4">
        {#each icons as icon}
          <span class="mx-2 text-2xl">
            {@html icon}
          </span>
        {/each}
      </div>
    </div>

    <p>
      {description}
    </p>
  </div>
</ClickableCard>
