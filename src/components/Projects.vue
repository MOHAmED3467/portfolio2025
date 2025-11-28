<template>
  <section id="projects" class="projects-section">

    <h2 class="section-title">🚀 My GitHub Projects</h2>

    <div class="projects-grid">
      <div
        v-for="project in projects"
        :key="project.id"
        class="project-card neon-card"
        data-aos="fade-up"
      >

      

        <!-- Title -->
        <h3 class="project-title">{{ project.name }}</h3>

        <!-- Description -->
        <p class="project-desc">
          {{ project.description || "No description available." }}
        </p>

        <!-- Tags -->
        <div class="tags">
          <span class="tag neon-tag">{{ project.language || "Unknown" }}</span>
          <span class="tag neon-tag star-tag">⭐ {{ project.stars }}</span>
        </div>

        <!-- Buttons -->
        <div class="actions">
          <a :href="project.url" target="_blank" class="neon-btn btn-small">GitHub</a>
          <a v-if="project.demo" :href="project.demo" target="_blank" class="neon-outline btn-small">
            Live Demo
          </a>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchGitHubProjects } from "../data/projects.js";

const projects = ref([]);

onMounted(async () => {
  projects.value = await fetchGitHubProjects();
});

</script>

<style scoped>
.projects-section {
  padding: 100px 0;
  text-align: center;
}

/* Title */
.section-title {
  font-size: 2.6rem;
  margin-bottom: 50px;
  font-weight: 700;
  color: var(--heading);
  text-shadow: 0 0 18px var(--primary);
}

/* Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 35px;
}

/* Card */
.project-card {
  padding: 22px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  box-shadow: 0 0 25px rgba(143, 74, 255, 0.4);
  backdrop-filter: blur(14px);
  transition: 0.35s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 35px var(--primary);
}

/* Image */
.project-image img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 16px;
  box-shadow: 0 0 18px rgba(143, 74, 255, 0.3);
}

/* Title */
.project-title {
  font-weight: 700;
  font-size: 1.4rem;
  color: var(--text);
  text-shadow: 0 0 12px var(--primary);
}

/* Description */
.project-desc {
  color: var(--text-soft);
  font-size: 0.95rem;
  margin: 10px 0 20px;
}

/* Tags */
.tags {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 14px;
}

.tag {
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(255,255,255,0.08);
  border: 1px solid var(--border);
  color: var(--text);
  font-size: 0.85rem;
}

.star-tag {
  display: flex;
  align-items: center;
  gap: 5px;
}

/* Buttons */
.actions {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.btn-small {
  padding: 8px 18px;
  font-size: 0.9rem;
  border-radius: 10px;
}
</style>
