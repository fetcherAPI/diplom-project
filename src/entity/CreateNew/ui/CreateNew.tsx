import { useState } from "react";
import { NewsAPI } from "../api/NewsAPI";
import { INews } from "../model/types";
import classes from "./CreateNew.module.scss";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, message } from "antd";
type Props = {};

export const CreateNew = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async (values: INews) => {
    setIsLoading(true);
    try {
      const res = await NewsAPI.createNews({
        title: values.title,
        description: values.description,
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
      name="control-hooks"
      onFinish={onFinish}
    >
      <Form.Item
        name="title"
        label="Заголовок"
        rules={[
          { required: true, message: "Не должен быть пустым" },
          { min: 10, message: "Минимум 10 символов" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Описние"
        rules={[
          { required: true, message: "Не должен быть пустым" },
          { min: 2, message: "Минимум 250 символов" },
        ]}
      >
        <Input.TextArea
          rows={4}
          style={{ resize: "none" }}
          showCount
          maxLength={250}
        />
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
