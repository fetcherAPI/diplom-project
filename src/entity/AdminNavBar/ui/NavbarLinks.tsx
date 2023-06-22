import { classNames } from "shared";
import { INavbarLinkProps } from "../model/types/NavbarLinkProps";
import classes from "./AdminNavBar.module.scss";
import { NavLink } from "react-router-dom";

export const NavbarLinks = (props: INavbarLinkProps) => {
  const { Icon, title, path } = props;
  return (
    <NavLink to={path}>
      {({ isActive, isPending }) => {
        return (
          <div
            className={classNames(
              classes.NavbarLink,
              { [classes.NavbarLinkActive]: isActive },
              []
            )}
          >
            <Icon color={isActive ? "#2A79CC" : ""} />
            <p style={{ color: isActive ? "#2A79CC" : "" }}>{title}</p>
          </div>
        );
      }}
    </NavLink>
  );
};
