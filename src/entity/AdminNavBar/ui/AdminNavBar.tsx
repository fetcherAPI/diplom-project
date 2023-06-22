import React from "react";
import { OrderIcon } from "../assets/SVGComponents/OrderIcon";
import {
  getRouteAdminPage,
  getRouteCreateNew,
  getRouteOrders,
} from "shared/const/router";
import { NavbarLinks } from "./NavbarLinks";
import classes from "./AdminNavBar.module.scss";
import { useLocation } from "react-router";
import { NewIcon } from "../assets/SVGComponents/NewIcon";
type Props = {};

export const AdminNavBar = (props: Props) => {
  const location = useLocation();
  console.log("location", location);
  const Links = [
    {
      title: "Заказы",
      Icon: OrderIcon,
      path: getRouteOrders(),
    },
    {
      title: "Создать новость",
      Icon: NewIcon,
      path: getRouteCreateNew(),
    },
    {
      title: "Заказы",
      Icon: OrderIcon,
      path: "fds",
    },
  ];
  return (
    <div className={classes.AdminNavBar}>
      {Links.map((link) => (
        <NavbarLinks {...link} />
      ))}
    </div>
  );
};
