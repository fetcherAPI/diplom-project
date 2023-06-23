import React from "react";
import classes from "./ServicesItem.module.scss";
import { TServiceItemProps } from "./types";
import { Link } from "react-router-dom";
import { getRouteServiceCard } from "shared/const/router";

export const ServicesItem = (props: TServiceItemProps) => {
  const { serviceDetails, serviceTitle, imgUrl, id } = props;

  return (
    <div className={classes.ServicesItem}>
      <div className={classes.serviceImg}>
        <div className={classes.figure}></div>
        <img src={imgUrl} alt="" />
      </div>
      <Link to={`${getRouteServiceCard()}/${id}`} state={props}>
        {serviceTitle}
      </Link>
    </div>
  );
};
