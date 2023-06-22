import React from "react";
import classes from "./Footer.module.scss";
import logo from "shared/assets/img/convertedLogo.svg";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd";
import ReactWhatsapp from "react-whatsapp";
type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className={classes.Footer}>
      <div className={classes.footer_header}>
        <img className={classes.logo} src={logo} alt="logo" />
        <ul className={classes.links}>
          <NavLink to="#">Каталог</NavLink>
          <NavLink to="#">Доставка</NavLink>
          <NavLink to="#">Оплата</NavLink>
          <NavLink to="#">Парйс-лист</NavLink>
          <NavLink to="#">Вакансии</NavLink>
          <NavLink to="#">Контакты</NavLink>
        </ul>
        <div>
          <Link to="mailto:zhaisan.moon@gmail.com" className={classes.email}>
            zhaisan.moon@gmail.com
          </Link>
          {/* <ReactWhatsapp
            number="0507320881"
            message="just message"
            element="button"
          >
            Send
          </ReactWhatsapp> */}
        </div>
      </div>
    </div>
  );
};
