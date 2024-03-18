import { Button, Form, Input } from "antd";
import { memo } from "react";

import React from "react";
let users = []
const Register = (props) => {
  const { setShowLogin } = props;

  const [form] = Form.useForm();
  const onFinish = (values) => {
    users.push(values)
    localStorage.setItem("users", JSON.stringify(users))
    form.resetFields()
    console.log(users);
  };
  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 20,
      },
      sm: {
        span: 10,
        offset: 1 
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 18, 
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >
      <Form.Item name="Fullname" label="Full Name">
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item 
        name="confirm"
        label="Confirm Password" 
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%", height: "44px", borderRadius: "23px" }}
        >
          Register
        </Button>
      </Form.Item>
      Already have an account? <a href="#" onClick={() => setShowLogin(true)}>Sign In</a>
    </Form>
  );
};

export default memo(Register);
