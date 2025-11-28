<template>
  <section id="contact" class="contact-section">
    <h2 class="section-title">Contact Me</h2>

    <div class="contact-wrapper">

      <!-- LEFT FORM -->
      <form class="contact-form neon-card">
        <input type="text" placeholder="Your Name" class="contact-input" />
        <input type="email" placeholder="Your Email" class="contact-input" />
        <textarea placeholder="Message" class="contact-textarea"></textarea>

        <button class="neon-btn full-btn">Send Message</button>
      </form>

      <!-- RIGHT INFO -->
      <div class="contact-info neon-card">
        <p><strong>Email:</strong> 20220636@nctu.edu.eg</p>
        <p><strong>WhatsApp:</strong> +20 155 240 7909</p>
        <p><strong>GitHub:</strong> MOHAmED3467</p>
      </div>

    </div>
  </section>
</template>
<style scoped>
.contact-section {
  padding: 120px 0;
  width: 100%;
}

.contact-wrapper {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

/* FORM */
.contact-form {
  padding: 25px;
  border-radius: 18px;
}

.contact-input,
.contact-textarea {
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 16px;
  background: #1a1a1f;
  border: 1px solid #333;
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  transition: 0.3s;
}

.contact-input:focus,
.contact-textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 10px var(--primary);
}

.contact-textarea {
  min-height: 150px;
  resize: vertical;
}

/* SEND BUTTON */
.full-btn {
  width: 100%;
  padding: 14px;
  font-size: 1.2rem;
}

/* RIGHT INFO */
.contact-info {
  padding: 25px;
  border-radius: 18px;
  font-size: 1.1rem;
}

.contact-info p {
  margin-bottom: 15px;
  color: var(--text);
}

.contact-info strong {
  color: var(--primary);
  text-shadow: 0 0 5px var(--primary);
}

/* MOBILE */
@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .contact-info {
    text-align: left;
  }
}
</style>
