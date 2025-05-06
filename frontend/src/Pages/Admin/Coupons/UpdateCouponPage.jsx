import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber, message, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCouponPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();
  const couponId = params.id;
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(couponId);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${couponId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        message.success("Coupon Updated");
        navigate(`/admin/coupons`);
      } else {
        message.error("Coupon Update Failed");
      }
    } catch (error) {
      console.log("Coupon Update Error", error);
    } finally {
      setLoading(false);
    }

  };

  useEffect(() => {
    const fetchSingleCoupon = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/api/coupons/${couponId}`);
        if (!response.ok) {
          throw new Error("Fetch error");
        }

        const data = await response.json();
        if (data) {
          form.setFieldsValue({
            code: data.code,
            discountPercent: data.discountPercent,
          });
        }
      } catch (error) {
        console.log("Data error:", error);
      } finally {
        setLoading(false);
        
      }
    };
    fetchSingleCoupon();
  }, [apiUrl, couponId, form]);

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
          rules={[{ required: true, message: "Please input your Discount Percent!" }]}
        >
          <InputNumber />
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

export default UpdateCouponPage;
