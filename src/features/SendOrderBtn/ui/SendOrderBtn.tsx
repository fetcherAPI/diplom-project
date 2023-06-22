import classes from "./SendOrderBtn.module.scss";

type Props = {
  disabled: boolean;
  onClick: () => void;
};

export const SendOrderBtn = ({ disabled, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={!disabled}
      className={classes.SendOrderBtn}
    >
      Оформить заказ
    </button>
  );
};
