<script lang="ts">
  import Navbar from './lib/Navbar.svelte'
  import TailwindCSS from './lib/TailwindCSS.svelte'
</script>


<svelte:head>
  <title>Gustavo Pinto</title>

  <TailwindCSS /> <!-- Registra os estilos CSS do Tailwind  -->
</svelte:head>

<template>
  <Navbar />
</template>

<style global>
  body {
    background-color: #2e2e2e;
  }
</style>
