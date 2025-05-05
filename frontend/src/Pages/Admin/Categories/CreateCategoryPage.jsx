import React, { useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import { useForm } from "antd/es/form/Form";
//import { useNavigate} from "react-router-dom";

const CreateCategoryPage = () => {
  //const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = useForm();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Category Created");
        form.resetFields();
      } else {
        message.error("Category Create Failed");
      }
    } catch (error) {
      console.log("Create Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <Form
        name="basic"
        layout="vertical"
        style={{ alignItems: "center", justifyContent: "center" }}
        onFinish={onFinish}
        form={form}
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
            Create
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};

export default CreateCategoryPage;
