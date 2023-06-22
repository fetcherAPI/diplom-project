import React from "react";
import classes from "./AdminPage.module.scss";
import { AdminNavBar } from "entity/AdminNavBar";
type Props = {};

export const AdminPage = (props: Props) => {
  return (
    <div className={classes.AdminPage}>
      <h1 className={classes.title}>Личный кабинет</h1>
      <AdminNavBar />
    </div>
  );
};
