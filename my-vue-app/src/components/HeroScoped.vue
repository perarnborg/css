<template>
  <header>
    <h1>Snygg rubrik!</h1>
    <p class="preamble">Och så en liten uppföljande text med en <a href="">länk</a> i.</p>
  </header>
</template>

<style scoped>
header:before {
  content: 'Scoped css';
}
header {
  border: 1px dotted blue;
  padding: 40px 80px;
  margin-bottom: 40px;
}
h1 {
  margin: 0;
  font-size: 4em;
}
.preamble {
  margin-top: 100px;
  font-size: 2em;
}
a {
  color: blue;
}
</style>
