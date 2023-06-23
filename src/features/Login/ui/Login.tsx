import React, { useEffect, useState } from "react";
import { Button, Modal, message } from "antd";
import { LoginForm } from "entity/loginForm";
import { useAppSelector } from "shared/lib";

export const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isAuth } = useAppSelector((state) => state.Auth);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isAuth) {
      handleOk();
      message.success("succes loged in ");
    }
  }, [isAuth]);

  const handleLogout = () => {};

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{ backgroundColor: "#2A79CC" }}
      >
        {isAuth ? "Выйти" : "Войти"}
      </Button>
      <Modal
        title="Форма входа"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <LoginForm />
      </Modal>
    </>
  );
};
