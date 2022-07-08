<script lang="ts">
  import Card from './templates/Card.svelte'

  export let quote: string
  export let author: string
</script>

<Card
  _class={'w-[75vw] md:w-[38vw] mx-auto text-xl pt-6 leading-6'}
>
  <blockquote class="mt-3">
    {quote}
  </blockquote>

  <div class="mt-4 w-full text-end">
    <cite>
      <small class="text-sm">
        {author}
      </small>
    </cite>
  </div>
</Card>
