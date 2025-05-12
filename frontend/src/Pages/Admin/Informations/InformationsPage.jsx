import React, { useCallback, useEffect, useState } from "react";
import { Button, message, Popconfirm, Space, Spin, Table } from "antd";
import { useNavigate } from "react-router-dom";

const InformationsPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (code) => <b>{code}</b>,
    },
    {
      title: "Addresss",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Open Hours",
      dataIndex: "open_hours",
      key: "open_hours",
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
              navigate(`/admin/informations/update/${record._id}`);
            }}
          >
            Update
          </Button>

          <Popconfirm
            title="Delete the coupon"
            description="Are you sure to delete this info?"
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
  const fetchInfo = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/information`);
      if (response.ok) {
        const data = await response.json();
        setDataSource(data.map((item) => ({ ...item, key: item._id })));
      } else {
        message.error("Data Fetch Failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);
  //------------------------------------------------------------------------------
  const deleteCoupon = async (infoId) => {
    try {
      const response = await fetch(`${apiUrl}/api/information/${infoId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Deletion Successed");
        fetchInfo();
      } else {
        message.error("Deletion Failed");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //------------------------------------------------------------------------------
  useEffect(() => {
    fetchInfo();
  }, [fetchInfo]);

  return (
    <Spin spinning={loading}>
      <Table columns={columns} dataSource={dataSource} />
    </Spin>
  );
};

export default InformationsPage;
