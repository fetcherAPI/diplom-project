export enum AppRoutes {
  MAIN = "/",
  SERVICE_CARD = "service-card",
  BASKET = "basket",
  VACANCY = "vacancy",
  NEWS = "news",
  ADMIN_PAGE = "admin-page",
  ORDERS = "orders",
}

export const getRouteMain = () => "/";
export const getRouteServiceCard = () => "/service-card";
export const getRouteBasket = () => "/basket";
export const getRouteVacancy = () => "/vacancy";
export const getRouteNews = () => "/news";

export const getRouteAdminPage = () => `/${AppRoutes.ADMIN_PAGE}`;
export const getRouteOrders = () => `${AppRoutes.ORDERS}`;
