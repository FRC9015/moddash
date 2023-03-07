import { createRouter } from "@swan-io/chicane";

export const router = createRouter({
  Home: "",
  Dashboard: "/dashboard",
  Tab: "/dashboard/:tab",
});
