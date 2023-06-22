import { BasketPage } from "pages/BasketPage";
import { MainPage } from "pages/MainPage";
import { NewsPage } from "pages/NewsPage";
import { ServicePage } from "pages/ServicePage";
import { VacancyPage } from "pages/VacancyPage";
import {
  getRouteBasket,
  getRouteMain,
  getRouteNews,
  getRouteServiceCard,
  getRouteVacancy,
} from "shared/const /router";

export const privateRoutes = [
  {
    path: getRouteMain(),
    element: MainPage,
  },
  {
    path: `${getRouteServiceCard()}/:id`,
    element: ServicePage,
  },
  {
    path: getRouteBasket(),
    element: BasketPage,
  },
  {
    path: getRouteVacancy(),
    element: VacancyPage,
  },
  {
    path: getRouteNews(),
    element: NewsPage,
  },
];

export const publicRoutes = [
  {
    path: "login",
    element: "dsjkljlk",
  },
];
