<template>
  <section id="about" class="about-section">
    <div class="container">

      <h2 class="section-title">About Me</h2>

      <div class="about-box neon-card">

        <div class="about-text">
          <h3 class="neon-sub">Who Am I?</h3>

          <p>
            I'm <strong>Mohamed Ehab</strong>, a software engineer specialized in
            <span class="highlight">Flutter</span>,
            <span class="highlight">Web Development</span>,
            and <span class="highlight">Embedded Systems</span>.
          </p>

          <p>
            I design futuristic digital experiences with Neon UI,
            smooth animations, and cyberpunk-inspired layouts.
          </p>

          <ul class="about-list">
            <li>✔ Creative UI/UX thinker</li>
            <li>✔ GSAP & animation lover</li>
            <li>✔ IoT & embedded systems engineer</li>
            <li>✔ Fast learner & problem solver</li>
          </ul>
        </div>

        <div class="about-img">
          <div class="glow"></div>
          <img :src="img" alt="Me">
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import img from "../assets/images/profile.jpg";
</script>

<style scoped>
.about-section {
  padding: 120px 0;
}

.about-box {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 40px;
  align-items: center;
}

.about-text {
  flex: 1;
}

.neon-sub {
  font-size: 1.6rem;
  color: #8f4aff;
  text-shadow: 0 0 8px #8f4aff;
}

.highlight {
  color: #2de0ff;
  text-shadow: 0 0 10px #2de0ff;
}

.about-list {
  margin-top: 12px;
  color: #dcdcff;
}

.about-img {
  width: 260px;
  height: 260px;
  position: relative;
}

.about-img img {
  width: 100%;
  border-radius: 18px;
  z-index: 2;
  position: relative;
}

.glow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #8f4aff, #2de0ff, #ff3ec9);
  border-radius: 22px;
  filter: blur(18px);
  animation: glowPulse 3s infinite ease-in-out;
  z-index: 1;
  top: 0;
}

@keyframes glowPulse {
  0% { opacity: 0.5; transform: scale(0.98); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.5; transform: scale(0.98); }
}
</style>
