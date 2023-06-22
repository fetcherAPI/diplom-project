import classes from "./BasketPage.module.scss";
import { Basket } from "features/Basket";
import { SendOrderBtn, sendOrder } from "features/SendOrderBtn";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { Title } from "shared/ui/Title";
import { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { clearBasket } from "features/Basket/model/BasketSlice/BasketSlice";
import { useAppDispatch } from "shared/lib";

export const BasketPage = () => {
  const { OrdersInBasket } = useAppSelector((state) => state.Basket);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    sendOrder({ ...values, orders: OrdersInBasket });
    dispatch(clearBasket([]));

    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={classes.BasketPage}>
      <Title>Корзина</Title>
      <Basket />
      <SendOrderBtn onClick={showModal} disabled={!!OrdersInBasket.length} />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout={"vertical"}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Имя"
            name="username"
            rules={[{ required: true, message: "Введите имя!" }]}
          >
            <Input placeholder="имя" />
          </Form.Item>
          <Form.Item
            label="Эл.адрес"
            name="email"
            rules={[{ required: true, message: "Введите адрес эл.почты!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Номер телефона"
            name="telNumber"
            rules={[{ required: true, message: "Введите номер" }]}
          >
            <Input placeholder="Номер телефона" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Потвердить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
