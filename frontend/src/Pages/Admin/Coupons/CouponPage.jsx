import { Button, message, Popconfirm, Table, Space } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CouponPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const columns = [
    {
      title: "Coupon Code",
      dataIndex: "code",
      key: "code",
      render: (code) => <b>{code}</b> ,
    },
    {
      title: "Discount Percent",
      dataIndex: "discountPercent",
      key: "discountPercent",
      render: (discountPercent) => <span>%{discountPercent}</span>,
    },
    {
      title: "Created at",
      dataIndex: "createdAt",
      key: "createdAt",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space size={"middle"}>
          <Button
            type="primary"
            onClick={() => {
              navigate(`/admin/coupons/update/${record._id}`);
            }}
          >
            Update
          </Button>

          <Popconfirm
            title="Delete the coupon"
            description="Are you sure to delete this coupon?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteCoupon(record._id)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  //------------------------------------------------------------------------------
  const fetchCategories = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`);
      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        message.error("Data fetch Failed");
      }
      console.log(response);
    } catch (error) {
      console.log("Data error:", error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  //------------------------------------------------------------------------------
  const deleteCoupon = async (couponId) => {
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Deletion Successed");
        fetchCategories();
      } else {
        message.error("Deletion Failed");
      }
      console.log(response);
    } catch (error) {
      console.log("Delete Errorı:", error);
    } finally {
      setLoading(false);
    }
  };
  //------------------------------------------------------------------------------

  //------------------------------------------------------------------------------
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default CouponPage;
