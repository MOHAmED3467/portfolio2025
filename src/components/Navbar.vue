<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
    <div class="container">
      <a class="navbar-brand fw-bold" href="#">Mohamed Ehab</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item" v-for="link in links" :key="link.name">
            <a :href="link.target" class="nav-link">{{ link.name }}</a>
          </li>

        </ul>

        <button class="btn btn-outline-light ms-3" @click="toggleMode">
          <i :class="isDark ? 'bi bi-sun' : 'bi bi-moon'"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isDark = ref(false);

const links = [
  { name: "About", target: "#about" },
  { name: "Projects", target: "#projects" },
  { name: "Skills", target: "#skills" },
  { name: "Timeline", target: "#timeline" },
  { name: "Certificates", target: "#certificates" },
  { name: "Contact", target: "#contact" },
];

const toggleMode = () => {
  isDark.value = !isDark.value;
  document.body.classList.toggle("dark-mode", isDark.value);
};

const handleScroll = () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  navbar.classList.toggle("navbar-shrink", window.scrollY > 50);
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>
