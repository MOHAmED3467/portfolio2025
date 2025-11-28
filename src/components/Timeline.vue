<template>
  <section id="timeline" class="timeline-section">
    <div class="container">
      <h2 class="section-title">Timeline</h2>

      <div class="timeline-line"></div>

      <div class="timeline">

        <div class="timeline-item neon-card" v-for="(t, i) in timeline" :key="i">
          <span class="dot"></span>

          <h3>{{ t.title }}</h3>
          <p class="date">{{ t.date }}</p>
          <p>{{ t.description }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { timeline } from "../data/timeline.js";
</script>

<style scoped>
.timeline-section {
  padding: 120px 0;
  position: relative;
  overflow: hidden; /* يمنع أي overflow أفقي */
}

/* خط النص في النص */
.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 3px;
  background: linear-gradient(#8f4aff, #2de0ff);
  transform: translateX(-50%);
  box-shadow: 0 0 15px #8f4aff;
}

/* نستخدم grid بدل margin 55% (اللي كانت مكسّرة الدنيا) */
.timeline {
  margin-top: 40px;
  max-width: 1000px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 70px;
  row-gap: 40px;
}

.timeline-item {
  position: relative;
  padding: 25px 24px;
  border-radius: 16px;
}

/* النقطة */
.dot {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2de0ff;
  box-shadow: 0 0 12px #2de0ff;
  top: 18px;
}

/* العناصر اللي في العمود الشمال (الأول) */
.timeline-item:nth-child(odd) {
  text-align: right;
}
.timeline-item:nth-child(odd) .dot {
  right: -8px;   /* تلمس الخط من اليمين */
}

/* العناصر اللي في العمود اليمين (الثاني) */
.timeline-item:nth-child(even) {
  text-align: left;
}
.timeline-item:nth-child(even) .dot {
  left: -8px;    /* تلمس الخط من الشمال */
}

/* التاريخ */
.date {
  color: var(--accent);
  font-weight: 600;
}

/* موبايل: نخليها عمود واحد وخط على الشمال */
@media (max-width: 768px) {
  .timeline {
    grid-template-columns: 1fr;
  }

  .timeline-line {
    left: 25px;
    transform: none;
  }

  .timeline-item {
    text-align: left !important;
    padding-left: 45px;
  }

  .dot,
  .timeline-item:nth-child(odd) .dot,
  .timeline-item:nth-child(even) .dot {
    left: 17px;
    right: auto;
  }
}
</style>
