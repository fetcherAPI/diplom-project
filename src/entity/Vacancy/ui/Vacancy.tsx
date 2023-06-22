import React, { useState } from "react";
import classes from "./Vacancy.module.scss";
import open from "../assets/img/Polygon 4.svg";
import close from "../assets/img/Polygon 4 (1).svg";
import { classNames } from "shared";
import { Link } from "react-router-dom";
type Props = {
  id: string;
  vacancyName: string;
  vacancyDescription: string;
  vacancyRequirements: Array<string>;
  vacancyConditions: Array<string>;
  vacancyResponsibilities: Array<string>;
};

export const Vacancy = (props: Props) => {
  const {
    id,
    vacancyName,
    vacancyDescription,
    vacancyRequirements,
    vacancyConditions,
    vacancyResponsibilities,
  } = props;

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
          <h1 className={classes.title}>{vacancyName}</h1>
          <p className={classes.descriotion}>{vacancyDescription}</p>
        </div>

        <button onClick={!isOpen ? handleOpen : handleClose}>
          <img src={!isOpen ? open : close} alt="" />
        </button>
      </div>
      <div className={classes.details_list}>
        <Details title="Обязанности" details={vacancyResponsibilities} />
        <Details title="Требования" details={vacancyRequirements} />
        <Details title="Условия" details={vacancyConditions} />
      </div>

      <p className={classes.message_for_future_employe}>
        Отправьте свое резюме на этот эл.адрес
      </p>
      <Link to="mailto:zhaisan.moon@gmail.com" className={classes.email}>
        zhaisan.moon@gmail.com
      </Link>
    </div>
  );
};

type detailProps = {
  title: string;
  details: Array<string>;
};

const Details = ({ title, details }: detailProps) => {
  return (
    <div className={classes.details}>
      <h1 className={classes.detail_title}>{title}</h1>
      <ul>
        {details.map((detail) => (
          <li key={detail} className={classes.details_item}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};
