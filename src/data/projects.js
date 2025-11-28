<script setup>
import { ref, onMounted } from "vue";

const repos = ref([]);
const loading = ref(true);

const fetchRepos = async () => {
  try {
    const response = await fetch(
      "https://api.github.com/users/MOHAmED3467/repos"
    );
    const data = await response.json();

    // نفلتر المشاريع المهمة بس (مش كل الريبو)
    repos.value = data.filter(repo =>
      !repo.fork && repo.name !== "MOHAmED3467" // exclude self repo
    );
  } catch (error) {
    console.error("GitHub API Error:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchRepos);
</script>
