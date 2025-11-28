<template>
  <section id="timeline" class="py-5 bg-light" data-aos="fade-up">
    <div class="container">
      <h2 class="text-center section-title mb-5">Education & Experience Timeline</h2>

      <div class="timeline-container">

        <div
          class="timeline-item"
          v-for="(item, index) in timeline"
          :key="index"
        >
          <div class="timeline-content">
            <h5>{{ item.title }}</h5>
            <p class="text-muted">{{ item.date }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { timeline } from '../data/timeline.js'
</script>
