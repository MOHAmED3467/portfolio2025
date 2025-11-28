<template>
  <section class="hero-section-new d-flex align-items-center">
    <div class="container hero-content text-center">

      <div class="profile-wrapper" data-aos="fade-down">
        <img :src="profileImg" alt="Profile" class="profile-img-new" />
      </div>

      <h1 class="fw-bold display-4 mt-4" data-aos="fade-up">
        Mohamed Ehab
      </h1>

      <p class="lead fs-4 mb-4" data-aos="fade-up" data-aos-delay="150">
        Software Engineer • Flutter Developer • Embedded Systems
      </p>

      <div data-aos="zoom-in" data-aos-delay="300">
        <a href="#projects" class="btn btn-primary btn-lg me-3 px-4">
          View Projects
        </a>
        <a href="#contact" class="btn btn-outline-light btn-lg px-4">
          Contact Me
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import profileImg from "../assets/images/profile.jpg";
</script>

<style scoped>
.hero-section-new {
  min-height: 100vh;
  background: linear-gradient(135deg, #1b1b1b, #3a3a3a);
  padding: 120px 0 80px;
  color: white;
  position: relative;
}

.profile-wrapper {
  width: 260px;
  height: 260px;
  margin: auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5);
}

.profile-img-new {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.btn-primary {
  background: #6c63ff;
  border: none;
}

.btn-primary:hover {
  background: #4a44c9;
}
</style>
