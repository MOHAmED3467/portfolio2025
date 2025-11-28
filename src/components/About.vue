<template>
  <section id="about" class="py-5" data-aos="fade-right">
    <div class="container">

      <div class="row align-items-center">

        <div class="col-lg-6">
          <h2 class="section-title">About Me</h2>

          <p class="lead">
            I am Mohamed Ehab Sayed Mahmoud, a passionate Software Engineer skilled in web and mobile development, as well as embedded systems.
          </p>

          <p>
            With experience in C, Java, C++, Python, and Flutter, I have built multiple
            real-world projects ranging from web applications to IoT solutions.
          </p>

          <a
            href="Science and Engineering Resume in Green Black Simple Style.pdf"
            download
            class="btn btn-primary mt-3"
          >
            <i class="bi bi-file-earmark-text me-2"></i> Download CV
          </a>
        </div>

        <div class="col-lg-6 text-center mt-5 mt-lg-0">
          <div class="row">

            <div class="col-6" v-for="(item, index) in cards" :key="index">
              <div class="card bg-light border-0 mb-4">
                <div class="card-body py-4">
                  <i :class="['bi', item.icon, 'display-4', 'text-primary', 'mb-2']"></i>
                  <h5>{{ item.title }}</h5>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const cards = [
  { title: "Web Development", icon: "bi-code-slash" },
  { title: "Mobile Apps", icon: "bi-phone" },
  { title: "Embedded Systems", icon: "bi-cpu" },
  { title: "Problem Solving", icon: "bi-lightbulb" },
];
</script>
