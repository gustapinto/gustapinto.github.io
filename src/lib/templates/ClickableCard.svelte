<script lang="ts">
  import Card from "./Card.svelte";

  export let url: string
</script>

<a href="{url}" class="block m-2">
  <Card _class="cursor-pointer hover:bg-secondary hover:text-white hover:shadow-md hover:shadow-primary">
    <slot />
  </Card>
</a>
