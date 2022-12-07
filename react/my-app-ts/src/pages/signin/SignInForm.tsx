import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import styles from "./SignInPage.module.css";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/user/slice";
import { useSelector } from "../../redux/hooks";
import { useHistory } from "react-router-dom";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const SignInForm = () => {
  const dispatch = useDispatch();
  const jwt = useSelector((s) => null);
  const history = useHistory();
  useEffect(() => {
    if (jwt !== null) {
      history.push("/");
    }
  }, [jwt]);
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(
      signIn({
        email: values.usename,
        password: values.password,
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className={styles["login"]}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
