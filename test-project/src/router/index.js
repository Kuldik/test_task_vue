import Vue from "vue";
import VueRouter from "vue-router";
import ProjectView from "../views/ProjectView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "catalog",
    component: ProjectView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
