<template>
  <nav :class="['navbar', { scrolled }]">
    <div class="container nav-inner">

      <!-- Logo -->
      <h1 class="logo">
        M<span>E</span>
      </h1>

      <!-- Desktop Links -->
      <ul class="nav-links">
        <li v-for="link in links" :key="link.text">
          <a :href="link.href">
            {{ link.text }}
            <span class="indicator"></span>
          </a>
        </li>
      </ul>

      <!-- Theme Switch -->
      <button class="theme-btn" @click="changeTheme">
        {{ themeIcon }}
      </button>

      <!-- Hamburger Menu -->
      <button class="menu-btn" @click="toggleMenu">☰</button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide">
      <ul v-if="menu" class="mobile-menu glass">
        <li 
          v-for="link in links"
          :key="link.text"
        >
          <a :href="link.href" @click="toggleMenu">
            {{ link.text }}
          </a>
        </li>

        <button class="theme-btn-mobile" @click="changeTheme">
          {{ themeIcon }}
        </button>
      </ul>
    </transition>

    <!-- Animated Bottom Line -->
    <div class="neon-bottom-line"></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

/* Navigation visibility on scroll */
const scrolled = ref(false);
const menu = ref(false);

const toggleMenu = () => (menu.value = !menu.value);

const handleScroll = () => {
  scrolled.value = window.scrollY > 40;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));

/* Links */
const links = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Skills", href: "#skills" },
  { text: "Projects", href: "#projects" },
  { text: "Certificates", href: "#certificates" },
  { text: "Timeline", href: "#timeline" },
  { text: "Contact", href: "#contact" }
];

/* ============================
   Theme System
============================ */
const theme = ref(localStorage.getItem("theme") || "neon");
const themeIcon = ref("🔮");

onMounted(() => applyTheme(theme.value));

const changeTheme = () => {
  if (theme.value === "neon") theme.value = "dark";
  else if (theme.value === "dark") theme.value = "light";
  else theme.value = "neon";

  localStorage.setItem("theme", theme.value);
  applyTheme(theme.value);
};

const applyTheme = (t) => {
  const body = document.body;

  body.classList.remove("theme-neon", "theme-dark", "theme-light");
  body.classList.add(`theme-${t}`);

  themeIcon.value =
    t === "neon" ? "🔮" : t === "dark" ? "🌑" : "☀️";
};
</script>

<style scoped>
/* ============= GENERAL NAVBAR STYLE ============= */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px 0;
  z-index: 1000;
  backdrop-filter: blur(14px);
  background: rgba(8, 0, 22, 0.4);
  border-bottom: 1px solid rgba(143, 74, 255, 0.25);
  transition: 0.3s ease;
}

.navbar.scrolled {
  background: rgba(8, 0, 22, 0.7);
  box-shadow: 0 0 25px rgba(143, 74, 255, 0.35);
}

/* Container */
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ============= LOGO ============= */
.logo {
  font-size: 2rem;
  color: var(--primary);
  font-weight: 800;
  text-shadow: 0 0 15px var(--primary);
  letter-spacing: 2px;
}

.logo span {
  color: var(--accent);
  text-shadow: 0 0 15px var(--accent);
}

/* ============= NAV LINKS ============= */
.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links li a {
  position: relative;
  font-size: 1.05rem;
  text-decoration: none;
  color: var(--text);
  transition: 0.25s;
}

.indicator {
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 3px;
  width: 0%;
  background: var(--accent);
  border-radius: 4px;
  box-shadow: 0 0 10px var(--accent);
  transition: 0.25s ease;
}

.nav-links li a:hover .indicator {
  width: 100%;
}

/* ============= THEME BUTTON ============= */
.theme-btn {
  background: transparent;
  border: none;
  font-size: 1.7rem;
  cursor: pointer;
  color: var(--text);
  margin-left: 20px;
  transition: 0.25s;
}

.theme-btn:hover { transform: scale(1.2); }

/* ============= MOBILE MENU ============= */
.menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  color: var(--text);
}

.mobile-menu {
  width: 100%;
  background: rgba(15, 0, 45, 0.95);
  padding: 30px 0;
  text-align: center;
  list-style: none;
  border-bottom: 1px solid var(--primary);
}

.mobile-menu li {
  margin: 15px 0;
}

.mobile-menu a {
  color: var(--text);
  text-decoration: none;
  font-size: 1.3rem;
}

.theme-btn-mobile {
  background: transparent;
  border: none;
  margin-top: 10px;
  font-size: 2rem;
  color: var(--text);
}

/* Mobile Behaviour */
@media (max-width: 850px) {
  .nav-links { display: none; }
  .menu-btn { display: block; }
}

/* ============= NEON BOTTOM LINE ============= */
.neon-bottom-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  animation: moveLine 4s linear infinite;
  box-shadow: 0 0 12px var(--accent);
}

@keyframes moveLine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* ============= ANIMATIONS ============= */
.slide-enter-active { animation: slideIn 0.35s forwards; }
.slide-leave-active { animation: slideOut 0.35s forwards; }

@keyframes slideIn {
  from { opacity:0; transform: translateY(-20px); }
  to   { opacity:1; transform: translateY(0); }
}

@keyframes slideOut {
  from { opacity:1; transform: translateY(0); }
  to   { opacity:0; transform: translateY(-20px); }
}
</style>
