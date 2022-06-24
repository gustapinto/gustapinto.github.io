<script lang="ts">
  import Card from './templates/Card.svelte'

  export let quote: string
  export let author: string
</script>

<Card
  _class={'w-[75vw] md:w-[40vw] mx-auto mt-[3.5em] text-xl pt-8 leading-7'}
>
  <blockquote class="mt-3">
    {quote}
  </blockquote>

  <div class="mt-6 w-full text-end">
    <cite>
      <small class="text-md">
        {author}
      </small>
    </cite>
  </div>
</Card>
