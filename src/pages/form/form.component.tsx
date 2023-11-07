import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import { IFormValues } from "./form";
import { useAddUser } from "./actions/form.mutation";
import { useLocation, useNavigate } from "react-router-dom";

const FormComponent = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name") || "";
  const age = parseInt(searchParams.get("age")) || 0;
  const email = searchParams.get("email") || "";
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [formData, setFormData] = useState<IFormValues>({ name, age, email });
  const [valuesArr, setValuesArr] = useState<IFormValues[]>([]);
  const initialValues: IFormValues = {
    name: "",
    email: "",
    age: 20,
  };
  const navigate = useNavigate();
  const addUser = useAddUser();

  const onSubmit = useCallback(
    (values: IFormValues) => {
      navigate("/users");
      console.log(values);
      const prevValues = [...valuesArr];
      const newValue = { ...values };
      const updatedValuesArr = [...prevValues, newValue];

      setValuesArr(updatedValuesArr);

      addUser.mutate(updatedValuesArr);
    },
    [addUser, valuesArr]
  );

  return (
    <Form
      name="basic"
      initialValues={formData}
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormComponent;
