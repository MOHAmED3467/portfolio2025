<template>
  <section id="skills" class="py-5" data-aos="fade-left">
    <div class="container">
      <h2 class="text-center section-title mb-5">Skills</h2>

      <div class="row">
        <div
          class="col-md-6"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <div class="skill-item mb-4">
            <div class="skill-name d-flex justify-content-between">
              <span>{{ skill.name }}</span>
              <span>{{ skill.percent }}%</span>
            </div>

            <div class="progress">
              <div
                class="progress-bar bg-gradient"
                :style="{ width: skill.percent + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { skills } from '../data/skills.js'
</script>
