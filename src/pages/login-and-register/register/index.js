import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { memo } from "react";

const Register = (props) => {
  const { setShowLogin } = props;

  const [isFormValid, setIsFormValid] = useState(false);

  const onFinish = (values) => {
    localStorage.setItem("users", JSON.stringify([values]));
  };
  
  const handleClick = () => {
    localStorage.setItem("isFromRegister", true); 
    console.log(localStorage.getItem("isFromRegister"));
    
  }

  const validateForm = () => {
    form
      .validateFields()
      .then(() => setIsFormValid(true))
      .catch(() => setIsFormValid(false));
  };

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        Fullname: "",
        email: "",
        password: "",
        confirm: "",
      }}
      scrollToFirstError
    >
      <Form.Item
        name="Fullname"
        label="Full Name"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input onChange={validateForm} />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            required: true,
            message: "Please input a valid email address!",
          },
        ]}
      >
        <Input onChange={validateForm} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Please input your password!" },
          { min: 6, message: "Password must be at least 6 characters long!" },
        ]}
        hasFeedback
      >
        <Input.Password onChange={validateForm} />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password onChange={validateForm} />
      </Form.Item>
      <Form.Item>
        {!isFormValid ? (
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            disabled={!isFormValid}
          >
            Register
          </Button>
        ) : (
          <Link to="/my-planner">
            <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            disabled={!isFormValid}
            onClick={handleClick}
          >
            Register
          </Button>
          </Link>
        )}
      </Form.Item>
      <p>
        Already have an account?{" "}
        <Link to="#" onClick={() => setShowLogin(true)}>
          Sign In
        </Link>
      </p>
    </Form>
  );
};

export default memo(Register);
