import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const AdminUserSinglePage = () => {
    
  const { _id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;


  const [, setFormUser] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });


  useEffect(() => {
    if (!_id) {
      console.warn("ID bulunamadı, fetch yapılmayacak.");
      return;
    }
  
    const fetchUser = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users/${_id}`);
        
        if (!response.ok) {
          throw new Error(`Sunucu hatası: ${response.status}`);
        }
  
        const data = await response.json();
        setFormUser(data);
        form.setFieldsValue(data); // Formu doldur
      } catch (err) {
        console.error("Kullanıcı verisi alınamadı:", err);
      }
    };
  
    fetchUser();
  }, [_id]);
  
 


  // Güncelleme işlemi
  const handleUpdate = async (values) => {
    try {
      const response = await fetch(`${apiUrl}/api/users/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Kullanıcı başarıyla güncellendi");
        navigate("/admin/users");
      } else {
        message.error("Güncelleme başarısız");
      }
    } catch (error) {
      console.error("Güncelleme hatası:", error);
      message.error("Sunucu hatası oluştu");
    }
  };

  return (
    <Form
      form={form}
      name="userEditForm"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      onFinish={handleUpdate}
      autoComplete="off"
      style={{ maxWidth: 600, marginTop: 30 }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Lütfen kullanıcı adını girin' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Lütfen e-postayı girin' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Lütfen şifreyi girin' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: 'Lütfen rolü girin' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Güncelle
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AdminUserSinglePage;
