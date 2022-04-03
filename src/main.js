import { createApp } from "vue";
import App from "./App.vue";
import Store from "./store/store.js";
// import router from "./router";

const app = createApp(App);

// app.use(router);

app.use(Store).mount("#app");
