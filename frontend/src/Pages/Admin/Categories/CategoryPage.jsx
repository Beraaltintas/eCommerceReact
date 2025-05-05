import { Button, message, Popconfirm, Table, Space } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (imgSrc) => <img src={imgSrc} alt="Image" width={100} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <b>{text}</b>,
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
              navigate(`/admin/categories/update/${record._id}`);
            }}
          >
            Update
          </Button>

          <Popconfirm
            title="Delete the category"
            description="Are you sure to delete this category?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteCategory(record._id)}
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
      const response = await fetch(`${apiUrl}/api/categories`);
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
  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Deletion Successed");
        fetchCategories();
      } else {
        message.error("deletion failed");
      }
      console.log(response);
    } catch (error) {
      console.log("delete errorı:", error);
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

export default CategoryPage;
