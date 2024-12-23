import type { RouteKey } from '@elegant-router/types';
import ElegantReactRouter from '@ohh-889/react-auto-route/vite';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface RouteMeta extends Record<string | number, unknown> {}

export function setupElegantRouter() {
  return ElegantReactRouter({
    customRoutes: {
      names: [
        'logout'
      ]
    },
    layouts: {
      base: 'src/layouts/base-layout/index.tsx',
      blank: 'src/layouts/blank-layout/index.tsx'
    },
    log: false,
    onRouteMetaGen(routeName) {
      const key = routeName as RouteKey;

      const constantRoutes: RouteKey[] = ['login', '403', '404', '500'];

      const meta: Partial<RouteMeta> = {
        i18nKey: `route.${key}` as App.I18n.I18nKey,
        title: key
      };

      if (constantRoutes.includes(key)) {
        meta.constant = true;
      }

      return meta;
    }
  });
}
