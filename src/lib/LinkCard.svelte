<script lang="ts">
  import Card from "./templates/Card.svelte";

  export let url: string
  export let text: string
  export let icon: string = "<i></i>"
</script>

<a href="{url}">
  <Card _class="cursor-pointer text-center hover:bg-secondary hover:text-primary hover:shadow-md hover:shadow-primary">
    <span class="font-semibold text-2xl">
      {text} {@html icon}
    </span>
  </Card>
</a>
