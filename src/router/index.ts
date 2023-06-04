import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import OverView from "../views/OverView.vue";
import BudgetView from "../views/BudgetView.vue";
import TaskView from "../views/TaskView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "overview",
    component: OverView,
  },
  {
    path: "/budget",
    name: "budget",
    component: BudgetView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TaskView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
