<script>
  import LinkCard from "./LinkCard.svelte"
</script>

<div class="w-[75vw] md:w-[38vw] mx-auto">
  <div class="w-100 sm:grid sm:grid-cols-2 gap-x-8">
    <LinkCard
      url={'/projects'}
      text={'Projetos'}
      icon={'<i class="fa-solid fa-diagram-project"></i>'}
    />

    <LinkCard
      url={'#'}
      text={'Experiência'}
      icon={'<i class="fa-solid fa-solid fa-laptop-code"></i>'}
    />
  </div>
</div>
