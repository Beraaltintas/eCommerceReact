import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Spin,
} from "antd";
import { useForm } from "antd/es/form/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const UpdateProductPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  const [form] = useForm();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const params = useParams();
  const productId = params.id;


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [categoriesResponse, singleProductsResponse] = await Promise.all([
          fetch(`${apiUrl}/api/categories`),
          fetch(`${apiUrl}/api/products/${productId}`),
        ]);
        if (!categoriesResponse || !singleProductsResponse) {
          message.error("Data fetch Failed");
        }
        const [categoriesData, singleProductData] = await Promise.all([
          categoriesResponse.json(),
          singleProductsResponse.json(),
        ]);
        if (singleProductData) {
          form.setFieldsValue({
            name: singleProductData.name,
            category: singleProductData.category,
            current: singleProductData.price.current,
            discount: singleProductData.price.discount,
            description: singleProductData.description,
            img: singleProductData.img.join("\n"),
            colors: singleProductData.colors.join("\n"),
            sizes: singleProductData.sizes.join("\n"),
          });
        }

        setCategories(categoriesData);
      } catch (error) {
        console.log("Data error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, form, productId]);
  console.log(categories);

  const onFinish = async (values) => {
    console.log(values);
    const imgLinks = values.img.split("\n").map((link) => link.trim());
    const colors = values.colors.split("\n").map((link) => link.trim());
    const sizes = values.sizes.split("\n").map((link) => link.trim());

    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          price: {
            current: values.current,
            discount: values.discount,
          },
          colors,
          sizes,
          img: imgLinks,
        }),
      });
      if (response.ok) {
        message.success("Product Update");
        form.resetFields();
        navigate("/admin/products");
      } else {
        message.error("Product Update Failed");
      }
    } catch (error) {
      console.log("Product Update Error", error);
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
          label="Product Name"
          name="name"
          rules={[
            { required: true, message: "Please input your Category name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please choose your product category!",
            },
          ]}
        >
          <Select>
            {categories.map((category) => (
              <Select.Option value={category._id} key={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Price"
          name="current"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Discount"
          name="discount"
          rules={[{ required: false, message: "Please input your discount!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: false, message: "Please input your description!" },
          ]}
        >
          <ReactQuill theme="snow" style={{ backgroundColor: "white" }} />
        </Form.Item>

        <Form.Item
          label="Product Image (Link)"
          name="img"
          rules={[
            {
              required: true,
              message: "Please input your product images! (at least 4 image)",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Write each image link on a new line"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item
          label="Product Colors (RGB codes)"
          name="colors"
          rules={[
            {
              required: true,
              message: "Please input your product colors! (at least 1 color)",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Write each color on a new line"
            autoSize={{ minRows: 1 }}
          />
        </Form.Item>

        <Form.Item
          label="Product Sizes"
          name="sizes"
          rules={[
            {
              required: true,
              message: "Please input your product sizes! (at least 1 size)",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Write each color on a new line"
            autoSize={{ minRows: 1 }}
          />
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

export default UpdateProductPage;
