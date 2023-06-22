import React from "react";
import classes from "./CommonNews.module.scss";
import { useLocation } from "react-router";
type Props = {};

export const NewsList = (props: Props) => {
  const location = useLocation();
  const data = location.state;
  console.log("data", data);
  return <div className={classes.NewsList}>NewsList</div>;
};
