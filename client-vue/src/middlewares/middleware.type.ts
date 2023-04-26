import {
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
} from 'vue-router';

export type MiddlewareType = {
  from: RouteLocationNormalized;
  to: RouteLocationNormalized;
  next: NavigationGuardNext;
  router: Router;
};
