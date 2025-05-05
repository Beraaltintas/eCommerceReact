import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategoryPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();
  const categoryId = params.id;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(categoryId);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Category Updated");
        navigate(`/admin/categories`);
      } else {
        message.error("Category Update Failed");
      }
    } catch (error) {
      console.log("Update Error", error);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    const fetchSingleCategory = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/categories/${categoryId}`);
        if (!response.ok) {
          throw new Error("Fetch error");
        }

        const data = await response.json();
        if (data) {
          form.setFieldsValue({
            name: data.name,
            img: data.img,
          });
        }
      } catch (error) {
        console.log("Data error:", error);
      } finally {
        setLoading(false);
        
      }
    };
    fetchSingleCategory();
  }, [apiUrl, categoryId, form]);

  return (
    <Spin spinning={loading}>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        style={{ alignItems: "center", justifyContent: "center" }}
        onFinish={onFinish}

      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[
            { required: true, message: "Please input your Category name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category Image (Link)"
          name="img"
          rules={[{ required: true, message: "Please input your img!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default UpdateCategoryPage;
