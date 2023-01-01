<script>
  import "../app.css";
  import Navbar from '$lib/Navbar.svelte'
  import Footer from '$lib/Footer.svelte'
  import favicon from '$lib/assets/favicon.ico'
</script>

<svelte:head>
  <meta name="description" content="Um jardineiro de software que vive cada amanhã melhor que o ontem, buscando novos conhecimentos e experiências">

  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-178156593-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-178156593-1');
  </script>

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">

  <link rel="icon" type="image/x-icon" href="{favicon}">
</svelte:head>

<Navbar />

<slot />

<style global>
  body {
    background-color: #2e2e2e;
    color: #2e2e2e;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    margin-bottom: 5em;
  }
</style>
