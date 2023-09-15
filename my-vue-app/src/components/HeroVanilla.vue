<template>
  <header class="hero">
    <h1>Snygg rubrik!</h1>
    <p class="preamble">Och så en liten uppföljande text med en <a href="">länk</a> i.</p>
  </header>
</template>

<style>
.hero:before {
  content: 'Vanilla css';
}
.hero {
  border: 1px dotted blue;
  padding: 40px 80px;
  margin-bottom: 40px;
}
.hero h1 {
  margin: 0;
  font-size: 4em;
}
.hero .preamble {
  margin-top: 100px;
  font-size: 2em;
}
.hero a {
  color: blue;
}
</style>
