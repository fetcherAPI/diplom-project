import React from "react";
import { useState } from "react";
import { VacancyAPI } from "../api/VacancyAPI";
import classes from "./CreateVacancy.module.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, message } from "antd";
type Props = {};

export const CreateVacancy = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    setIsLoading(true);
    try {
      const res = await VacancyAPI.createVacancy({
        vacancyName: values.vacancyName,
        vacancyDescription: values.vacancyDescription,
        vacancyRequirements: values.vacancyRequirements.split(" "),
        vacancyConditions: values.vacancyConditions.split(" "),
        vacancyResponsibilities: values.vacancyResponsibilities.split(" "),
      });
      onReset();
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      className={classes.form}
      layout={"vertical"}
      form={form}
      name="control-hooks2"
      onFinish={onFinish}
    >
      <Form.Item
        name="vacancyName"
        label="Название вкансии"
        rules={[
          { required: true, message: "Не должен быть пустым" },
          { min: 10, message: "Минимум 10 символов" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="vacancyDescription"
        label="Описние вакансии"
        rules={[
          { required: true, message: "Не должен быть пустым" },
          { min: 120, message: "Минимум 120 символов" },
        ]}
      >
        <Input.TextArea rows={4} showCount maxLength={250} />
      </Form.Item>
      <Form.Item
        name="vacancyResponsibilities"
        label="Обязанности"
        rules={[
          { required: true, message: "Не должен быть пустым" },
          { min: 50, message: "Минимум 50 символов" },
        ]}
      >
        <Input.TextArea rows={4} showCount maxLength={250} />
      </Form.Item>
      <Form.Item
        name="vacancyRequirements"
        label="Требование  вакансии"
        rules={[
          { required: true, message: "Не должен быть пустым" },
          { min: 50, message: "Минимум 50 символов" },
        ]}
      >
        <Input.TextArea rows={4} showCount maxLength={250} />
      </Form.Item>
      <Form.Item
        name="vacancyConditions"
        label="Условие вакансии"
        rules={[
          { required: true, message: "Не должен быть пустым" },
          { min: 50, message: "Минимум 50 символов" },
        ]}
      >
        <Input.TextArea rows={4} showCount maxLength={250} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={isLoading}>
          Создать
          {isLoading && <LoadingOutlined rev={undefined} />}
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Збросить
        </Button>
      </Form.Item>
    </Form>
  );
};
