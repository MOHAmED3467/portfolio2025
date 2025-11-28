<template>
  <section id="certificates" class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center section-title mb-5">Certificates</h2>

      <div class="row g-4">
        <div
          v-for="(cert, index) in certificates"
          :key="index"
          class="col-md-6 col-lg-4"
          data-aos="fade-up"
          :data-aos-delay="150 * index"
        >
          <div class="card certificate-card shadow-sm h-100">

            <img :src="cert.image" class="card-img-top cert-img" alt="Certificate" />

            <div class="card-body">
              <h5 class="card-title fw-bold">{{ cert.title }}</h5>
              <p class="text-muted mb-1">{{ cert.issuer }}</p>

              <p class="small mb-1"><strong>Date:</strong> {{ cert.date }}</p>
              <p class="small mb-2"><strong>Duration:</strong> {{ cert.duration }}</p>

              <p class="card-text">{{ cert.description }}</p>

              <a
                :href="cert.link"
                target="_blank"
                class="btn btn-outline-primary w-100 mt-3"
              >
                View Certificate
              </a>

            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { certificates } from "../data/certificates.js";
</script>

<style scoped>
.certificate-card {
  border-radius: 12px;
  overflow: hidden;
  transition: 0.3s;
}

.certificate-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.13) !important;
}

.cert-img {
  height: 210px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
}

.section-title {
  font-weight: 700;
  position: relative;
}

.section-title::after {
  content: "";
  width: 60px;
  height: 4px;
  background: #6c63ff;
  display: block;
  margin: 10px auto 0;
  border-radius: 2px;
}
</style>
