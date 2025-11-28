<template>
  <section id="certificates" class="cert-section">
    
    <h2 class="section-title">Certificates</h2>

    <div class="cert-grid">

      <div
        class="cert-card neon-card"
        v-for="(cert, i) in certificates"
        :key="i"
        @click="openModal(cert)"
      >
        <img :src="cert.image" class="cert-img" />
        <h3 class="cert-title">{{ cert.title }}</h3>
        <p class="cert-issuer">{{ cert.issuer }}</p>
      </div>

    </div>

    <!-- ========== MODAL ========== -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content neon-card">
        <img :src="activeCert.image" class="modal-img" />
        <h3 class="modal-title">{{ activeCert.title }}</h3>
        <p class="modal-issuer">{{ activeCert.issuer }}</p>

        <div class="modal-actions">
          <a :href="activeCert.image" download class="neon-btn">Download</a>
          <button @click="closeModal" class="neon-outline">Close</button>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from "vue";
import { certificates } from "../data/certificates.js";

const showModal = ref(false);
const activeCert = ref({});

// ========== Modal Open ==========
const openModal = (cert) => {
  activeCert.value = cert;
  showModal.value = true;

  // منع الخلفية من التحرك
  document.body.style.overflow = "hidden";
};

// ========== Modal Close ==========
const closeModal = () => {
  showModal.value = false;

  // رجوع الحركة
  document.body.style.overflow = "auto";
};
</script>

<style scoped>
.cert-section {
  padding: 100px 0;
}

/* Grid */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

/* Card */
.cert-card {
  padding: 14px;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.cert-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 0 25px var(--primary);
}

/* Image */
.cert-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
}

/* Titles */
.cert-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text);
  text-shadow: 0 0 10px var(--primary);
}

.cert-issuer {
  color: var(--text-soft);
}

/* =======================
        MODAL FIX
======================= */

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999 !important; /* أعلى من كل شيء */
  padding: 25px;
}

.modal-content {
  width: 90%;
  max-width: 900px;
  max-height: 90vh; 
  overflow-y: auto;
  border-radius: 18px;
  padding: 20px;
  background: var(--card-bg);
  box-shadow: 0 0 25px var(--primary);
}

/* تجعل الصورة مناسبة لحجم المودال */
.modal-img {
  width: 100%;
  height: auto;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 14px;
  box-shadow: 0 0 20px var(--primary);
}

/* العنوان */
.modal-title {
  font-size: 1.6rem;
  margin-top: 16px;
  color: var(--heading);
  text-shadow: 0 0 10px var(--primary);
}

.modal-actions {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
</style>
