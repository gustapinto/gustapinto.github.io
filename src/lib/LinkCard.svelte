<script lang="ts">
  import ClickableCard from "./templates/ClickableCard.svelte";

  export let url: string
  export let text: string
  export let icon: string = "<i></i>"
</script>

<ClickableCard url={url}>
  <div class="w-100 text-center">
    <span class="font-semibold text-2xl">
      {text} {@html icon}
    </span>
  </div>
</ClickableCard>
