import type { App } from "vue";
import AppHeader from "./AppHeader.vue";

export function SharedModule(app: App): void {
  app.component("AppHeader", AppHeader);
}

export { AppHeader };
