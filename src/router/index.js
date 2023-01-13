import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView.vue";
import NotFound from "../views/NotFound.vue";
import UserView from "../views/UserView.vue";
import Page from "../views/PageView.vue";
import SearchResults from "../views/SearchResults.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page/:name",
    name: "Page",
    component: Page,
  },
  {
    path: "/user/:name",
    name: "UserView",
    component: UserView,
  },
  {
    path: "/search/:searchTerm",
    name: "SearchResults",
    component: SearchResults,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
