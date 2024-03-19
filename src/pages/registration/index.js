import picture_1 from "./picture/picture_1.png";
import picture_2 from "./picture/picture_2.png";
import picture_3 from "./picture/picture_3.png";
import picture_4 from "./picture/picture_4.png";
import picture_5 from "./picture/picture_5.png";
import picture_6 from "./picture/picture_6.png";
import picture_7 from "./picture/picture_7.png";
import picture_8 from "./picture/picture_8.png";
import { Form, Button, Input } from "antd";
import useStyles from "./style";
import React from "react";

const users = [];

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
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

const Registration = () => {
  const loginStyle = useStyles();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    users.push(values);
    console.log("All registered users:", users);
  };

  return (
    <div className={loginStyle.container}>
        <div className={loginStyle.left}>
        <div className={loginStyle.heading}>
          <h1>
            <span className={loginStyle.pp}>Personal Planner</span> for
            Organizing <br />
            Work & Private Stuff1
          </h1>
          <h2>Don't wait for the future to happen to you</h2>
        </div>
        <div className={loginStyle.topPictureGroup}>
          <img className={loginStyle.img1} src={picture_1} alt="groups img" />
          <img className={loginStyle.img2} src={picture_2} alt="groups img" />
          <img className={loginStyle.img3} src={picture_3} alt="groups img" />
          <img className={loginStyle.img4} src={picture_4} alt="groups img" />
          <img className={loginStyle.img5} src={picture_5} alt="groups img" />
          <img className={loginStyle.img6} src={picture_6} alt="groups img" />
        </div>
        <div>
        <h2 className={loginStyle.colorOrange}>Get productive</h2>
        <h2 className={loginStyle.colorWhite}>Do more in less time</h2>
        <h3 className={loginStyle.colorWhite}>Here's an introduction to key features and benefits:</h3>
       <div className={loginStyle.one}>
          <p className={loginStyle.text}>
              Calendar Integration: Digital planners often integrate
              with calendar applications, allowing users to sync events 
              and appointments seamlessly.
              Task Management: Users can create, organize, and 
              prioritize tasks with ease. Some platforms offer features
              like due dates, reminders, and task categorization.
              Note-taking and Documentation: Digital planners usually 
              include note-taking capabilities, enabling users to jot 
              down ideas, thoughts, or important information.
          </p>
          <img className={loginStyle.img7} src={picture_7} alt="groups img" />
        </div>
        <div className={loginStyle.one}>
          <p className={loginStyle.text2}>
              Calendar Integration: Digital planners often integrate
              with calendar applications, allowing users to sync events 
              and appointments seamlessly.
              Task Management: Users can create, organize, and 
              prioritize tasks with ease. Some platforms offer features
              like due dates, reminders, and task categorization.
              Note-taking and Documentation: Digital planners usually 
              include note-taking capabilities, enabling users to jot 
              down ideas, thoughts, or important information.
          </p>
          <img className={loginStyle.img8} src={picture_8} alt="groups img" />
        </div>
        </div>
      </div>
      <div className={loginStyle.right}>
      <p className={loginStyle.title}>Registration</p>

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
          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Registration;
