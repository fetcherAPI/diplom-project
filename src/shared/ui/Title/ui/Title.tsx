import React, { ReactNode } from "react";
import classes from "./Title.module.scss";
type Props = {
  children: ReactNode;
};

export const Title = ({ children }: Props) => {
  return <h1 className={classes.Title}>{children}</h1>;
};
