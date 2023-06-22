import React from "react";
import blacknote from 'shared/assets/img/blacknot.jpg'
import firmStyle from 'shared/assets/img/firmstyle.jpg'
import cup from 'shared/assets/img/cup.jpg'
import card from 'shared/assets/img/card.jpg'
import banner from 'shared/assets/img/banner.jpg'
import tshirt from 'shared/assets/img/tshirt.jpg'
import dontknow from 'shared/assets/img/dontknow.jpg'
import classes from './FirmStyle.module.scss'


const imgs = [
  {
    path: blacknote,
    alt: 'blacknote'
  },
  {
    path: firmStyle,
    alt: 'firmStyle'
  },

  {
    path: cup,
    alt: 'cup'
  },

  {
    path: card,
    alt: 'card'
  },

  {
    path: banner,
    alt: 'banner'
  },

  {
    path: tshirt,
    alt: 'tshirt'
  },
  {
    path: dontknow,
    alt: 'dontknow'
  },


]
export const FirmStyle = () => {
  return <div className={classes.firmStyle}>
    <h1>Фирменный дизайн</h1>
    <div className={classes.ImgsWrapper}>
      {
        imgs.map(el => <img src={el.path} alt={el.alt}/>)
      }
    </div>
  </div>;
};
