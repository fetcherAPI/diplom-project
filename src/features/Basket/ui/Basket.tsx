import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IOrderInBasket } from "../types/BasketSliceShema";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { removeFromBasket } from "../model/BasketSlice/BasketSlice";

export const Basket = () => {
  const { OrdersInBasket } = useAppSelector((state) => state.Basket);
  const dispatch = useAppDispatch();

  const handleDeleteFromBasket = (id: string) => {
    dispatch(removeFromBasket(id));
  };

  const columns: ColumnsType<IOrderInBasket> = [
    {
      title: "Услуга",
      dataIndex: "title",
      key: "service",
    },

    {
      title: "Действия",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDeleteFromBasket(record.id)}>
            Удалить из корзины
          </a>
        </Space>
      ),
    },
  ];

  return <Table dataSource={OrdersInBasket} columns={columns} />;
};
