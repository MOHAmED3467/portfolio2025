import { createApp } from "vue";
import App from "./App.vue";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Styles
import "./assets/styles.css";

const app = createApp(App);

AOS.init({
  duration: 1000,
  once: true,
});

app.mount("#app");
