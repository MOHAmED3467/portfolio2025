<template>
  <section class="hero" id="home">

    <!-- Animated Neon Lines -->
    <div class="neon-line line1"></div>
    <div class="neon-line line2"></div>
    <div class="neon-line line3"></div>

    <div class="container hero-content">

      <!-- Profile Frame Neon -->
      <div class="profile-wrapper" ref="imgRef">
        <div class="glow-border"></div>
        <img :src="profileImg" alt="Profile" />
      </div>

      <h1 class="title" ref="titleRef">
        <span class="hello">HELLO, I'M</span><br />
        <span class="name">MOHAMED <span class="ehab">EHAB</span></span>
      </h1>

      <h2 class="role" ref="roleRef">
        <span class="typing"></span>
      </h2>

      <p class="desc" ref="descRef">
        Software Engineer focused on futuristic UI, Flutter apps,
        web applications, and embedded systems — building advanced experiences
        with smooth animations and neon cyber aesthetics.
      </p>

      <div class="hero-buttons" ref="btnRef">
        <a href="#projects" class="btn neon-btn">🚀 View Projects</a>
        <a href="#contact" class="btn neon-outline">📩 Contact Me</a>
      </div>

    </div>
  </section>
</template>

<script setup>

import { ref, onMounted } from "vue";
import gsap from "gsap";
import profileImg from "../assets/images/profile.jpg";

const imgRef = ref(null);
const titleRef = ref(null);
const roleRef = ref(null);
const descRef = ref(null);
const btnRef = ref(null);

onMounted(() => {
  gsap.from(imgRef.value, { opacity: 0, y: -40, duration: 1 });
  gsap.from(titleRef.value, { opacity: 0, y: 30, duration: 1 });
  gsap.from(roleRef.value, { opacity: 0, y: 30, duration: 1, delay: 0.2 });
  gsap.from(descRef.value, { opacity: 0, y: 30, duration: 1, delay: 0.4 });
  gsap.from(btnRef.value, { opacity: 0, y: 30, duration: 1, delay: 0.6 });
});

// Neon Typing Effect
onMounted(() => {
  const roles = [
    "Software Engineer",
    "Flutter Developer",
    "Frontend Developer",
    "Embedded Systems Engineer",
    "Cyber UI Designer",
  ];

  let index = 0;
  const typingElement = document.querySelector(".typing");

  const type = () => {
    let text = roles[index];
    let i = 0;

    const typing = setInterval(() => {
      typingElement.textContent = text.slice(0, i++);
      if (i > text.length) {
        clearInterval(typing);
        setTimeout(() => erase(text), 1000);
      }
    }, 70);
  };

  const erase = (text) => {
    let i = text.length;
    const erasing = setInterval(() => {
      typingElement.textContent = text.slice(0, i--);
      if (i < 0) {
        clearInterval(erasing);
        index = (index + 1) % roles.length;
        setTimeout(type, 500);
      }
    }, 40);
  };

  type();
});



</script>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding-top: 130px;
  text-align: center;
  background: linear-gradient(160deg, #050016, #080020, #000011);
  color: #dcdcff;
}

/* Neon animated background lines */
.neon-line {
  position: absolute;
  width: 2px;
  height: 140%;
  background: rgba(140, 72, 255, 0.2);
  filter: blur(1px);
  animation: slide 9s linear infinite;
}

.line1 { left: 10%; animation-delay: 0s; }
.line2 { left: 50%; animation-delay: 3s; }
.line3 { left: 85%; animation-delay: 6s; }

@keyframes slide {
  from { transform: translateY(-100%); }
  to { transform: translateY(100%); }
}

/* Profile Neon Frame */
.profile-wrapper {
  position: relative;
  width: 220px;
  height: 220px;
  margin: auto;
}

.profile-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  object-fit: cover;
  z-index: 2;
  position: relative;
}

.glow-border {
  position: absolute;
  top: -8px;
  left: -8px;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  border-radius: 22px;
  background: linear-gradient(45deg, #8f4aff, #2de0ff, #ff3ec9);
  z-index: 1;
  filter: blur(12px);
  animation: glow 4s infinite ease-in-out;
}

@keyframes glow {
  0% { opacity: 0.6; transform: scale(0.98); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.6; transform: scale(0.98); }
}

/* Text */
.title {
  margin-top: 25px;
  font-size: 2.6rem;
  text-shadow: 0 0 15px #9f4fff;
}

.name {
  color: #cfaaff;
}

.ehab {
  color: #2de0ff;
  text-shadow: 0 0 14px #2de0ff;
}

.role {
  margin-top: 10px;
  font-size: 1.5rem;
  color: #adb5ff;
  text-shadow: 0 0 8px #8f4aff;
  min-height: 40px;
}

.desc {
  max-width: 650px;
  margin: 20px auto;
  font-size: 1.1rem;
  color: #ccccff;
}

/* Neon Buttons */
.neon-btn {
  background: #8f4aff;
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  margin-right: 12px;
  box-shadow: 0 0 18px #8f4aff;
  transition: 0.2s;
}

.neon-btn:hover {
  box-shadow: 0 0 25px #8f4aff, 0 0 35px #8f4aff;
  transform: translateY(-3px);
}

.neon-outline {
  padding: 12px 28px;
  border: 2px solid #2de0ff;
  color: #2de0ff;
  border-radius: 8px;
  transition: 0.2s;
}

.neon-outline:hover {
  background: #2de0ff;
  color: #000013;
  box-shadow: 0 0 20px #2de0ff;
  transform: translateY(-3px);
}
</style>
