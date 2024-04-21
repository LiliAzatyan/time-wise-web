import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { memo, useState } from "react";
import useStyles from "../style";
import React from "react";

const Login = (props) => {
  const loginStyle = useStyles();
  const { setShowLogin } = props;
  const [form] = Form.useForm();
  // const navigate = useNavigate();

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const users = JSON.parse(localStorage.getItem("users")) || []; // Default to empty array if null
  console.log(users);

  const checkAccount = (username, password) => {
    setLoginSuccess(false);

    for (const user of users) {
      console.log(user.email, username);
      console.log(user.password, password);
      if (user.email == username && user.password == password) {
        console.log("Login successful:", users);
        setErrorMessage("");
        setLoginSuccess(true);
      }
      console.log(loginSuccess);
    }

    if (!loginSuccess) {
      console.log("Login failed: Incorrect email or password");
      setErrorMessage("Incorrect email or password. Please try again.");
      console.log(users);
    }
  };

  const onFinish = (values) => {
    if (values.username && values.password) {
      console.log("Success:", values);
      checkAccount(values.username, values.password);
    } else {
      console.log("Failed: Please fill in all required fields.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const responseMessage = (response) => {
    console.log(response);
  };

  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div className={loginStyle.buttonGoogleLogin}>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          {loginSuccess ? (
            <Link to="/my-planner">
              <Button type="primary" size="large">
                Login
              </Button>
            </Link>
          ) : (
            <>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) || form.isFieldsValidating()
                }
                className={loginStyle.loginButton}
              >
                Login
              </Button>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            </>
          )}
        </Form.Item>
        Don't have an account?{" "}
        <a onClick={() => setShowLogin(false)}>register now!</a>
      </Form>
    </>
  );
};

export default memo(Login);
