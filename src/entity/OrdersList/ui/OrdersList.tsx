import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IOrderCommonData } from "../model/Order";
import { OrderAPI } from "../api/OrderAPI";
import { DeleteTwoTone } from "@ant-design/icons";
import dayjs from "dayjs";
import ru from "dayjs/locale/ru";

dayjs.locale(ru);

export const OrdersList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<Array<IOrderCommonData>>([]);

  const handleGetOrdersList = async () => {
    setIsLoading(true);
    try {
      const res = await OrderAPI.getOrdersList();
      console.log("data", res.data);
      setData(res.data.orders);
    } catch (err) {
      console.log("err", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteOrder = async (id: string) => {
    try {
      const res = await OrderAPI.deleteOrderById(id);

      handleGetOrdersList();
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    if (!data.length) {
      handleGetOrdersList();
    }
  }, []);

  const columns: ColumnsType<IOrderCommonData> = [
    {
      title: "Имя заказчика",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Тел. номер",
      dataIndex: "telNumber",
      key: "telNumber",
    },
    {
      title: "Эл. адрес",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Поступление заказа",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => (
        <p>{dayjs(record.createdAt).format("dddd, MMMM D, YYYY h:mm A")}</p>
      ),
    },
    {
      title: "Услуги",
      key: "orders",
      dataIndex: "orders",
      render: (_, { orders }) => (
        <>
          {orders.map((tag) => {
            let color = tag.title.length > 5 ? "geekblue" : "green";
            if (tag.title === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag._id}>
                {tag.title.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Действия",
      key: "action",
      render: (_, record) => (
        <Space size="middle" onClick={() => handleDeleteOrder(record._id)}>
          <DeleteTwoTone rev={undefined} style={{ fontSize: "22px" }} />
        </Space>
      ),
    },
  ];

  return isLoading ? (
    <p>"Загрузка данных...."</p>
  ) : (
    <Table columns={columns} dataSource={data} />
  );
};
