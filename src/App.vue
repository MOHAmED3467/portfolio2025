<template>
  <Navbar />
  <Hero />
  <About />
  <Projects />
  <Skills />
  <Timeline />
  
  <Certificates />
  <Contact />
  <Footer />
  
</template>

<script setup>
import Navbar from "./components/Navbar.vue"
import Hero from "./components/Hero.vue"
import About from "./components/About.vue"
import Projects from "./components/Projects.vue"
import Skills from "./components/Skills.vue"
import Timeline from "./components/Timeline.vue"

import Certificates from "./components/Certificates.vue";
import Contact from "./components/Contact.vue"
import Footer from "./components/Footer.vue"

import { onMounted } from "vue"

onMounted(() => {
  if (window.AOS) {
    window.AOS.init({ duration: 1000, once: true })
  }
})
</script>
