import React, { useState } from "react";
import classes from "./News.module.scss";
import open from "../assets/img/Polygon 4.svg";
import close from "../assets/img/Polygon 4 (1).svg";
import { classNames } from "shared";
import { Link } from "react-router-dom";
type Props = {
  id: string;
  newsName: string;
  newsDescription: string;
};

export const News = (props: Props) => {
  const { id, newsName, newsDescription } = props;

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
          <h1 className={classes.title}>{newsName}</h1>
          <p className={classes.descriotion}>{newsDescription}</p>
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
