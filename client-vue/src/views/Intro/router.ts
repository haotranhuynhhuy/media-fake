import { checkNotLogin } from "../../middlewares/auth";
import constRouter from "../../constants/constRouter";
import { RouterType } from "../../plugins/routers";

export default [
  {
    path: constRouter.INTRO.path,
    name: constRouter.INTRO.name,
    // meta: {
    //   middleware: [checkNotLogin],
    // },
    component: () => import("./IntroSlide.vue"),
  },
] as Array<RouterType>;
