import React, { useState } from "react";
import classes from "./ServiceCard.module.scss";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addToBasket, removeFromBasket } from "features/Basket";
import { DeleteFilled } from "@ant-design/icons";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";

type Props = {};

export const ServiceCard = (props: Props) => {
  const location = useLocation();
  const { serviceDetails, serviceTitle, imgUrl, id, cardImgUrl } =
    location.state;

  const handleAddToBasket = (id: string) => {
    setIsAddedBasket(true);
    dispatch(addToBasket({ id, isAddedBasket: true, title: serviceTitle }));
  };

  const handleRemoveFromBasket = (id: string) => {
    setIsAddedBasket(false);
    dispatch(removeFromBasket(id));
  };
  const { OrdersInBasket } = useAppSelector((state) => state.Basket);
  const selectedService = OrdersInBasket.filter(
    (service) => service.id === id
  )[0];
  const [isAddedBasket, setIsAddedBasket] = useState<boolean>(
    selectedService && selectedService.isAddedBasket
  );

  const dispatch = useAppDispatch();

  return (
    <div className={classes.ServiceCard}>
      <div className={classes.make_order_block}>
        <div>
          <h1 className={classes.title}>{serviceTitle}</h1>
          <p className={classes.article}>
            <span>Артикул:</span>
            {id}
          </p>
          <img src={cardImgUrl} alt="Service img" />
        </div>
        <div>
          <button
            className={classes.add_btn}
            disabled={isAddedBasket}
            onClick={() => handleAddToBasket(id)}
          >
            В карзину
          </button>
          <button
            className={classes.remove_btn}
            onClick={() => handleRemoveFromBasket(id)}
          >
            <DeleteFilled style={{ fontSize: "24px", color: "#fff" }} />
          </button>
          <span className={classes.basket_size_shower}>
            {OrdersInBasket.length}
          </span>
        </div>
      </div>
    </div>
  );
};
