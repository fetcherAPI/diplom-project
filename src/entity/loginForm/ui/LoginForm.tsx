import { Button, Form, Input, message } from "antd";
import { IAuthBody } from "../model/types/AuthType";
import { useAppDispatch, useAppSelector } from "shared/lib";
import { loginByPassword } from "../model/services/LoginByPassword";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.Auth);
  const onFinish = (values: IAuthBody) => {
    dispatch(
      loginByPassword({ email: values.email, password: values.password })
    ).then(() => {
      if (isAuth) {
        message.success("Успешно вошли");
      }
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      layout={"vertical"}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email пользователя"
        name="email"
        rules={[
          { required: true, message: "Введите email!" },
          {
            required: true,
            type: "email",
            message: "Не валидный email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          { required: true, message: "Введите пароль!" },
          { min: 6, message: "минимум 6 символов" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
