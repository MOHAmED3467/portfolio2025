<template>
  <section id="awards" class="awards-section">

    <h2 class="section-title">Awards & Certificates</h2>

    <div class="awards-grid">

      <div class="award-card neon-card" v-for="item in awards" :key="item.title">
        <div class="award-icon">
          <i class="bi bi-award"></i>
        </div>

        <h3 class="award-title">{{ item.title }}</h3>
        <p class="award-org">{{ item.org }}</p>

        <span class="award-tag">{{ item.type }}</span>
      </div>

    </div>

  </section>
</template>
<style scoped>
.awards-section {
  padding: 120px 0;
}

/* Grid Layout */
.awards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 35px;
  margin-top: 40px;
}

/* Neon Award Card */
.award-card {
  padding: 28px;
  border-radius: 18px;
  text-align: center;
  transition: 0.3s;
}

.award-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 25px var(--primary);
}

/* Icon Circle */
.award-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: auto;
  background: rgba(140, 50, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34px;
  color: var(--primary);
  text-shadow: 0 0 12px var(--primary);
  margin-bottom: 15px;
}

/* Text */
.award-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--heading);
}

.award-org {
  color: var(--text-soft);
  margin: 8px 0 10px;
}

.award-tag {
  display: inline-block;
  padding: 6px 14px;
  background: var(--primary);
  color: white;
  font-size: 0.9rem;
  border-radius: 20px;
  box-shadow: 0 0 12px var(--primary);
}
</style>
<script setup>
const awards = [
  {
    title: "Training Certificate",
    org: "Jlecom Company – 2023",
    type: "Professional Development",
  },
  {
    title: "Training Certificate",
    org: "Information Technology Institute (ITI) – 2025",
    type: "Advanced Training",
  },
];
</script>
