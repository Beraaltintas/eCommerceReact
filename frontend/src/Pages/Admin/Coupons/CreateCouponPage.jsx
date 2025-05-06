import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  message,
  Spin,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate } from "react-router-dom";

const CreateCouponPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = useForm();

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Coupon Created");
        form.resetFields();
        navigate("/admin/coupons");
      } else {
        message.error("Coupon Create Failed");
      }
    } catch (error) {
      console.log("Coupon Create Error", error);
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
          label="Coupon Name"
          name="code"
          rules={[
            { required: true, message: "Please input your Coupon name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Discount Percent"
          name="discountPercent"
          rules={[
            { required: true, message: "Please input your Discount Percent!" },
          ]}
        >
          <InputNumber />
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

export default CreateCouponPage;
