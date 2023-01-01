<script lang="ts">
  export let fa: string
  export let link: string

  let iconClass: string = fa + ' text-[3.25em] cursor-pointer text-white hover:text-primary'
</script>

<a href="{link}" class="block">
  <i class="{iconClass}"></i>
</a>
