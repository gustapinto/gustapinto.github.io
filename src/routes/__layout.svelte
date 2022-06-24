<script>
  import "../app.css";
  import Navbar from '../lib/Navbar.svelte'
  import Footer from '../lib/Footer.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">
</svelte:head>

<Navbar />

<slot />

<Footer />

<style global>
  body {
    background-color: #2e2e2e;
    color: #2e2e2e;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
</style>
