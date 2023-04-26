import { RouterType } from '@/plugins/routers';
import { defineStore } from 'pinia';

export interface SidebarMenu {
  url: string;
  icon: string;
  text: string;
  is_divider?: boolean;
  highlight?: boolean;
  children?: object;
}

export const useAppSidebarMenuStore = defineStore('appSidebarMenu', () => {
  const menus: Array<SidebarMenu> = [];

  const routerFiles: Record<string, unknown> = import.meta.glob(
    '../screens/**/router.ts',
    { eager: true },
  );

  Object.entries(routerFiles).forEach((file: any) => {
    const rs: Array<RouterType> = file[1].default;
    for (const r of rs) {
      if (r.menu) {
        menus.push(r.menu);
      }
    }
  });
  return [
    {
      text: 'Navigation',
      is_header: true,
    },
    {
      url: '/',
      icon: 'bi bi-house-door',
      text: 'Home',
      is_divider: false,
      highlight: false,
      children: null,
    },
    ...menus,
  ];
});
