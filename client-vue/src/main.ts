import { createApp } from "vue";
import { createPinia } from "pinia";
import "./scss/styles.scss";
import router from "./plugins/routers";
import App from "./App.vue";
import event from "./plugins/event";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(event);

app.mount("#app");
