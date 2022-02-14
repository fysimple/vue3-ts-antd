// 路由
import {
  createRouter,
  createWebHashHistory,
  RouteLocationNormalized,
} from "vue-router";
// 路由集合
const routes = [
  {
    path: "/",
    redirect: "Login",
  },
  // 登录
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/login/index.vue"),
  },
  // 未捕获地址
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/error/404.vue"),
  },
];
// 配置路由
const Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: RouteLocationNormalized) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});
export default Router;
