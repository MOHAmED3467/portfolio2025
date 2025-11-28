<template>
  <section id="awards" class="py-5" data-aos="fade-up">
    <div class="container">

      <h2 class="text-center section-title mb-5">Awards & Certificates</h2>

      <div class="row justify-content-center">

        <div class="col-md-8">

          <div
            class="card shadow-sm mb-4"
            v-for="item in awards"
            :key="item.title"
          >
            <div class="card-body d-flex align-items-center">

              <div class="bg-primary p-3 rounded me-4">
                <i class="bi bi-award text-white fs-2"></i>
              </div>

              <div>
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text mb-1">{{ item.org }}</p>
                <span class="badge bg-primary">{{ item.type }}</span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const awards = [
  {
    title: "Training Certificate",
    org: "Jlecom Company – 2023",
    type: "Professional Development",
  },
  {
    title: "Training Certificate",
    org: "Information Technology Institute (ITI) – 2025",
    type: "Advanced Training",
  },
];
</script>
