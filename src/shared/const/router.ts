export enum AppRoutes {
  MAIN = "/",
  SERVICE_CARD = "service-card",
  BASKET = "basket",
  VACANCY = "vacancy",
  NEWS = "news",
  ADMIN_PAGE = "admin-page",
  ORDER = "order",
  CREAT_NEWS = "create-news",
  CREATE_VACANCY = "create-vacancy",
}

export const getRouteMain = () => "/";
export const getRouteServiceCard = () => "/service-card";
export const getRouteBasket = () => "/basket";
export const getRouteVacancy = () => "/vacancy";
export const getRouteNews = () => "/news";

export const getRouteAdminPage = () => `/${AppRoutes.ADMIN_PAGE}`;
export const getRouteOrders = () => `${AppRoutes.ORDER}`;
export const getRouteCreateNew = () => `${AppRoutes.CREAT_NEWS}`;
export const getRouteCreateVacancy = () => `${AppRoutes.CREATE_VACANCY}`;
