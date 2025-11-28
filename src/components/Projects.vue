<template>
  <section id="projects" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center section-title mb-5">My GitHub Projects</h2>

      <!-- LOADING -->
      <div v-if="loading" class="text-center fs-4">
        Loading projects...
      </div>

      <!-- ERROR -->
      <div v-if="error" class="text-center text-danger">
        Failed to load GitHub projects.
      </div>

      <!-- PROJECT LIST -->
      <div class="row g-4" v-if="!loading && !error">
        <div
          v-for="repo in repos"
          :key="repo.id"
          class="col-md-6 col-lg-4"
          data-aos="fade-up"
        >
          <div class="card p-3 shadow-sm h-100">

            <h5 class="fw-bold">{{ repo.name }}</h5>

            <p class="text-muted small">
              {{ repo.description || "No description provided." }}
            </p>

            <p class="small mb-1">
              <strong>Language:</strong> {{ repo.language || "Unknown" }}
            </p>

            <p class="small text-secondary">
              ⭐ Stars: {{ repo.stargazers_count }}
              • 🍴 Forks: {{ repo.forks_count }}
            </p>

            <a
              :href="repo.html_url"
              target="_blank"
              class="btn btn-dark w-100 mt-3"
            >
              View on GitHub
            </a>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const repos = ref([]);
const loading = ref(true);
const error = ref(false);

const fetchRepos = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/MOHAmED3467/repos"
    );

    if (!response.ok) {
      error.value = true;
      return;
    }

    const data = await response.json();

    // بدون فلترة — عشان نشوف كل المشاريع
    repos.value = data;

  } catch (err) {
    console.log(err);
    error.value = true;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchRepos);
</script>

<style scoped>
.card {
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
</style>
