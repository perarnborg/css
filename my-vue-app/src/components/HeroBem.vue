<template>
  <header class="Hero">
    <h1 class="Hero__heading">Snygg rubrik!</h1>
    <p class="Hero__preamble">Och så en liten uppföljande text med en <a class="Hero__link" href="">länk</a> i.</p>
  </header>
</template>

<style>
.Hero:before {
  content: 'BEM';
}
.Hero {
  border: 1px dotted blue;
  padding: 40px 80px;
  margin-bottom: 40px;
}
.Hero__heading {
  margin: 0;
  font-size: 4em;
}
.Hero__preamble {
  margin-top: 100px;
  font-size: 2em;
}
.Hero__link {
  color: blue;
}
</style>
