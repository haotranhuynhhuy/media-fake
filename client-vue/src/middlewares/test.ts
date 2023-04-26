import { MiddlewareType } from './middleware.type';

export default function ({ from, to, next, router }: MiddlewareType) {
  console.log({ from, to, next, router });
  next();
}
