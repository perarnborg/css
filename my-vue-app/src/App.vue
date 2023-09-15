<script setup>
import HeroVanilla from './components/HeroVanilla.vue'
import HeroBem from './components/HeroBem.vue'
import HeroScoped from './components/HeroScoped.vue'
import HeroTailwind from './components/HeroTailwind.vue'
</script>

<template>
  <div class="App">
    <HeroVanilla v-if="true" />
    <HeroBem v-if="false" />
    <HeroTailwind v-if="false" />
    <HeroScoped v-if="false" />
  </div>
</template>

<style>
.App {
  max-width: 900px;
  margin: 100px auto;
}
/*
.App * + p {
  margin-top: 1em;
}
*/
</style>
