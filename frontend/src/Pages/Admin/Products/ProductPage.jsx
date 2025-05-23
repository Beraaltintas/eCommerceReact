import { Button, message, Popconfirm, Table, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (imgSrc) => <img src={imgSrc[0]} alt="Image" width={100} />,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <b>{text}</b>,
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <span>${text.current.toFixed(2)}</span>,
    },
    {
      title: "Discount",
      dataIndex: "price",
      key: "price",
      render: (text) => <span>%{text.discount}</span>,
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
              navigate(`/admin/products/update/${record._id}`);
            }}
          >
            Update
          </Button>

          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteProduct(record._id)}
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

  //------------------------------------------------------------------------------
  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Deletion Successed");

        setDataSource((prevProducts) => {
          return prevProducts.filter((product) => product._id !== productId); //UI güncelleme
        });
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
    const fetchData = async () => {
      setLoading(true);
      try {
        const [categoriesResponse, productsResponse] = await Promise.all([
          fetch(`${apiUrl}/api/categories`),
          fetch(`${apiUrl}/api/products`),
        ]);
        if (!categoriesResponse || !productsResponse) {
          message.error("Data fetch Failed");
        }
        const [categoriesData, productsData] = await Promise.all([
          categoriesResponse.json(),
          productsResponse.json(),
        ]);
        const productsWithCategories = productsData.map((product) => {
          const categoryId = product.category;
          const category = categoriesData.find(
            (item) => item._id === categoryId
          );
          return { ...product, categoryName: category ? category.name : "" };
        });
        setDataSource(productsWithCategories);
      } catch (error) {
        console.log("Data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record._id}
      loading={loading}
    />
  );
};

export default ProductPage;
