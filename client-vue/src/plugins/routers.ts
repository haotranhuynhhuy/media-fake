import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import middlewarePipeline from "../middlewares/middleware.pipeline";
import { SidebarMenu } from "@/stores/app-sidebar-menu";
import constRouter from "../constants/constRouter";

// General route
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: constRouter.INTRO.name,
  },
];

const routerFiles: Record<string, unknown> = import.meta.glob(
  "../views/**/router.ts",
  { eager: true }
);

Object.entries(routerFiles).forEach((file: any) => {
  const rs: Array<any> = file[1].default || module;
  for (const r of rs) {
    routes.push(r);
  }
});

function hasQueryParams(route: any) {
  return !!Object.keys(route.query).length;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let toWithQuery;

  if (!hasQueryParams(to) && hasQueryParams(from)) {
    toWithQuery = Object.assign({}, to, { query: from.query });
  }
  if (to.meta && to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };

    middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1),
    });

    // Get next name route
    const nextNameRoute = middleware[0]();

    // Navigate
    if (nextNameRoute) {
      next({ name: nextNameRoute, query: from.query });
    } else {
      toWithQuery ? next(toWithQuery) : next();
    }
  } else {
    toWithQuery ? next(toWithQuery) : next();
  }
});

export type RouterType = RouteRecordRaw & { menu?: SidebarMenu };

export default router;
