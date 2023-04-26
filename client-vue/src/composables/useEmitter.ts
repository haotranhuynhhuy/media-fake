import { Emitter, EventType } from 'mitt';
import { getCurrentInstance } from 'vue';

export default function useEmitter<
  Events extends Record<EventType, unknown>,
>(): Emitter<Events> {
  const internalInstance = getCurrentInstance();
  let emitter = null;
  if (internalInstance) {
    emitter = internalInstance.appContext.config.globalProperties.$event;
  }

  return emitter;
}
