import React, { useState } from "react";
import classes from "./News.module.scss";
import open from "../assets/img/Polygon 4.svg";
import close from "../assets/img/Polygon 4 (1).svg";
import { classNames } from "shared";
import { Link } from "react-router-dom";
export type INewaProps = {
  title: string;
  description: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
};

export const News = (props: INewaProps) => {
  const { _id, title, description } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={classNames(classes.Vacancy, { [classes.opened]: isOpen }, [])}
    >
      <div className={classes.vacancy_header}>
        <div>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.descriotion}>{description}</p>
        </div>

        <button onClick={!isOpen ? handleOpen : handleClose}>
          <img src={!isOpen ? open : close} alt="" />
        </button>
      </div>

      <Link to="mailto:zhaisan.moon@gmail.com" className={classes.email}>
        zhaisan.moon@gmail.com
      </Link>
    </div>
  );
};
