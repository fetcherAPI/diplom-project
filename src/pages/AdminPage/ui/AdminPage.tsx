import React from "react";
import classes from "./AdminPage.module.scss";
import { AdminNavBar } from "entity/AdminNavBar";
import { Outlet } from "react-router";
type Props = {};

export const AdminPage = (props: Props) => {
  return (
    <div className={classes.AdminPage}>
      <h1 className={classes.title}>Личный кабинет</h1>
      <div className={classes.content}>
        <AdminNavBar />
        <Outlet />
      </div>
    </div>
  );
};
