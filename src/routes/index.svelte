<script lang="ts">
  import IconsRow from "$lib/IconsRow.svelte";
  import QuoteCard from "$lib/QuoteCard.svelte";
</script>

<svelte:head>
  <title>Gustavo Pinto</title>
</svelte:head>

<main>
  <div class="mt-[5em]">
    <QuoteCard
      quote={'“O melhor patrimônio que dispomos para dar nossa contribuição máxima ao mundo somos nós”'}
      author={'Greg McKeown, Essencialismo'}
    />
  </div>

  <div class="mt-[5em]">
    <IconsRow />
  </div>
</main>
