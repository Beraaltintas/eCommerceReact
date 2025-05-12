import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, message, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const UpdateInformationPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();
  const infoId = params.id;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/information/${infoId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Informations Updated");
        navigate(`/admin/informations`);
      } else {
        message.error("Informations Update Failed");
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
        const response = await fetch(`${apiUrl}/api/information/${infoId}`);
        if (!response.ok) {
          throw new Error("Fetch error");
        }

        const data = await response.json();
        if (data) {
          form.setFieldsValue({
            name: data.name,
            address: data.address,
            phone: data.phone,
            logo: data.logo,
            email: data.email,
            open_hours: data.open_hours,
          });
        }
      } catch (error) {
        console.log("Data error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleCategory();
  }, [apiUrl, infoId, form]);

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
          label="Website Name"
          name="name"
          rules={[
            { required: true, message: "Please input your Website name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input your Address!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: "Please input your Phone!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Logo"
          name="logo"
          rules={[{ required: true, message: "Please input your Logo!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Open Hours"
          name="open_hours"
          rules={[{ required: true, message: "Please input your Open Hours!" }]}
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

export default UpdateInformationPage;
