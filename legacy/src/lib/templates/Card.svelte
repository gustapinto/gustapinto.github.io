<script lang="ts">
  export let _class: string

  let cardClass: string = 'bg-white skew-y-2 p-6 ' + _class
</script>

<div class={cardClass}>
  <slot />
</div>
