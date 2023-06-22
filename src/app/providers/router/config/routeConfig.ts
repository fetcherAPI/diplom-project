import { OrdersList } from "entity/OrdersList";
import { AdminPage } from "pages/AdminPage";
import { BasketPage } from "pages/BasketPage";
import { MainPage } from "pages/MainPage";
import { NewsPage } from "pages/NewsPage";
import { ServicePage } from "pages/ServicePage";
import { VacancyPage } from "pages/VacancyPage";
import {
  getRouteAdminPage,
  getRouteBasket,
  getRouteMain,
  getRouteNews,
  getRouteOrders,
  getRouteServiceCard,
  getRouteVacancy,
} from "shared/const/router";
import { FirmStyle } from "widgets/FirmStyle";

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

  {
    path: getRouteAdminPage(),
    element: AdminPage,
    chilren: [
      {
        path: getRouteOrders(),
        element: OrdersList,
      },
      {
        path: "fds",
        element: FirmStyle,
      },
    ],
  },
];

export const publicRoutes = [
  {
    path: "login",
    element: "dsjkljlk",
  },
];
