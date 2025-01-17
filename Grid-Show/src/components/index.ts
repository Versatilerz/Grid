import type { App } from "vue";
import AppHeader from "./AppHeader.vue";
import Grid from "./Grid.vue";

export function SharedModule(app: App): void {
  app.component("AppHeader", AppHeader);
  app.component("Grid", Grid);
}

export { AppHeader, Grid };
