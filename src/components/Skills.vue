<template>
  <section id="skills" class="skills-section">
    <div class="container">

      <h2 class="section-title">Skills</h2>

      <div class="skills-grid">

        <div class="skill-card neon-card" v-for="s in skills" :key="s.name">

          <div class="circle-wrapper">
            <svg class="radial-progress" viewBox="0 0 100 100">
              <circle class="track" cx="50" cy="50" r="45"></circle>
              <circle class="progress"
                cx="50" cy="50" r="45"
                :style="{ 'stroke-dashoffset': calcOffset(s.percent) }"
              ></circle>
            </svg>

            <div class="skill-percent">{{ s.percent }}%</div>
          </div>

          <h3 class="skill-name">{{ s.name }}</h3>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { skills } from "../data/skills.js";

const calcOffset = (percent) => {
  const circumference = 2 * Math.PI * 45;
  return circumference - (percent / 100) * circumference;
};
</script>

<style scoped>
.skills-section {
  padding: 120px 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 40px;
}

/* Skill Card */
.skill-card {
  text-align: center;
  padding: 30px 20px;
  border-radius: 20px;
  position: relative;
}

/* Circle wrapper */
.circle-wrapper {
  position: relative;
  width: 150px;
  height: 150px;
  margin: auto;
}

/* SVG Circles */
.radial-progress {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.track {
  fill: none;
  stroke: rgba(255,255,255,0.08);
  stroke-width: 10;
}

.progress {
  fill: none;
  stroke: var(--primary);
  stroke-width: 10;
  stroke-linecap: round;
  stroke-dasharray: calc(2 * 3.1415 * 45);
  transition: stroke-dashoffset 1s ease-out;
  filter: drop-shadow(0 0 6px var(--primary));
}

/* Percent Text */
.skill-percent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text);
}

/* Skill Name */
.skill-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 18px;
  color: var(--text-soft);
}
</style>
