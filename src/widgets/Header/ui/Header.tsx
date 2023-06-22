import React from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import logo from "shared/assets/img/convertedLogo.svg";
import {
  getRouteBasket,
  getRouteNews,
  getRouteVacancy,
} from "shared/const /router";
import { Login } from "features/Login";
import { useAppDispatch, useAppSelector } from "shared/lib";

export const Header = () => {
  const { isAuth } = useAppSelector((state) => state.Auth);

  return (
    <header className={classes.Header}>
      <div className={classes.logo_block}>
        <Link to={"/"}>
          <img className={classes.logo} src={logo} alt="logo" />
        </Link>
      </div>

      <div className={classes.header_controllers_block}>
        <ul className={classes.links}>
          <p>Бишкек</p>
          <p>+996 706 34-15-19</p>
          <Link to={getRouteBasket()}>Оплата</Link>
          <Link to={getRouteVacancy()}>Вакансии</Link>
          <Link to={getRouteNews()}>Новости</Link>
          <Link to={"/"}>Контакты</Link>
          {isAuth && <Link to={getRouteNews()}>Админ панель</Link>}
          <Login />
        </ul>
        <div className={classes.search_block}>
          <input type="text" placeholder="Поиск товаров" />
          <button>Найти</button>
        </div>
      </div>
    </header>
  );
};
