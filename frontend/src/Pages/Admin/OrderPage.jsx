import { message, Spin, Table } from "antd";
import React, { useEffect, useState } from "react";

const OrderPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  const MY_STRIPE_SECRET_KEY = import.meta.env.VITE_API_;
  const columns = [
    {
      title: "Client Email",
      dataIndex: "receipt_email",
      key: "receipt_email",
    },
    {
      title: "Order Price",
      dataIndex: "amount",
      key: "amount",
      render: (record) => <b>${(record / 100).toFixed(2)}</b>
    },
  ];

  //------------------------------------------------------------------------------

  //------------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.stripe.com/v1/payment_intents`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${MY_STRIPE_SECRET_KEY}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data.data);

          setDataSource(data.data);
        } else {
          message.error("Data fetch Failed");
        }
      } catch (error) {
        console.log("Data error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [MY_STRIPE_SECRET_KEY]);

  return (
    <Spin spinning={loading}>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record.id}
        loading={loading}
      />
    </Spin>
  );
};

export default OrderPage;
