import React from "react";
import { OrderIcon } from "../assets/SVGComponents/OrderIcon";
import { getRouteAdminPage } from "shared/const /router";
import { NavbarLinks } from "./NavbarLinks";

type Props = {};

const Links = [
  {
    title: "Заказы",
    Icon: OrderIcon,
    path: getRouteAdminPage(),
  },
];

export const AdminNavBar = (props: Props) => {
  return (
    <div>
      {Links.map((link) => (
        <NavbarLinks {...link} />
      ))}
    </div>
  );
};
