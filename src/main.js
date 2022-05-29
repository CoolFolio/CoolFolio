import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

import Scrollbar from "./scrollbar";
import Settings from "./builder";
import Init from "./init";

window.Settings = Settings;
localStorage.color = Settings.theme.color;

const app = createApp(App);
app.use(router);
app.mount("#app");

Scrollbar();
Init();
