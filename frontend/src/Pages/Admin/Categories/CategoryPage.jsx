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
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (imgSrc) => (
        <img
          src={imgSrc}
          alt="Avatar"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
      ),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => deleteUser(record.email)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
          <Button type="primary" onClick={()=> {
            navigate(`../users/${record._id}`)

            
            
          }} >
              Update
            </Button>

        </Space>
      ),
    },
  ];


 //------------------------------------------------------------------------------
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/users`);
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
  const deleteUser = async (userEmail) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`, {
        method: "DELETE",
      });
      if (response.ok) {
        message.success("Deletion Successed");
        fetchUsers();
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
    fetchUsers();
  }, [fetchUsers]);

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
