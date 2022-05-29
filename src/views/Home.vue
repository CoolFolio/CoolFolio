<script setup>
console.log(window.Settings);

import Hero from "../components/Hero.vue";
import Skills from "../components/Skills.vue";
import Footer from "../components/Footer.vue";
import Gallery from "../components/Gallery.vue";
import Projects from "../components/Projects.vue";
import Repositories from "../components/Repositories.vue";
</script>

<template>
  <Hero />
  <Gallery />
  <Skills />
  <Projects />
  <Repositories />
  <Footer />
</template>
