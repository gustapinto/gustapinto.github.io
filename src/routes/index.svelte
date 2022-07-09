<script lang="ts">
  import AboutMeRow from "$lib/AboutMeRow.svelte";
  import IconsRow from "$lib/IconsRow.svelte";
import LinksRow from "$lib/LinksRow.svelte";
  import QuoteCard from "$lib/QuoteCard.svelte";
</script>

<svelte:head>
  <title>Gustavo Pinto</title>
</svelte:head>

<main>
  <div class="mt-[7.5em]">
    <QuoteCard
      quote={'“O melhor patrimônio que dispomos para dar nossa contribuição máxima ao mundo somos nós”'}
      author={'Greg McKeown, Essencialismo'}
    />
  </div>

  <div class="mt-[7.5em]">
    <IconsRow />
  </div>

  <div class="mt-[7.5em]">
    <AboutMeRow />
  </div>

  <div class="mt-[7.5em]">
    <LinksRow />
  </div>
</main>
