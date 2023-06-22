import React from "react";
import sliderSvg from "./assests/_ slider.svg";
import classes from "./Slider.module.scss";
type Props = {};

export const Slider = (props: Props) => {
  return (
    <div>
      <img src={sliderSvg} alt="" className={classes.Slider} />
    </div>
  );
};
