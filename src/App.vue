<template>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Certificates />
  <Timeline />
  <Contact />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Certificates from "./components/Certificates.vue";
import Timeline from "./components/Timeline.vue";
import Contact from "./components/Contact.vue";
</script>

<style>
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: #0f0f0f;
  color: white;
}
* {
  box-sizing: border-box;
  max-width: 100%;
}

</style>
