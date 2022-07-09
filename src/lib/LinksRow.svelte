<script>
  import Card from "./templates/Card.svelte";

</script>
<div class="w-[75vw] md:w-[38vw] mx-auto">
  <div class="w-100 sm:grid sm:grid-cols-2 gap-x-8">
    <Card _class="cursor-pointer">
      <a href="#" class="text-secondary font-semibold text-2xl my-4 ">
        Projetos
      </a>
    </Card>
    <Card _class="cursor-pointer">
      <a href="#" class="text-secondary font-semibold text-2xl">
        Experiência
      </a>
    </Card>
  </div>
</div>
