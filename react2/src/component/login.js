import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import SignUpPage from './signup';
import { signInWithEmailAndPassword, auth } from '../component/firebase/firebase';
import AppLayout from './Layout';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const LoginPage = () => {
  const login =(values)=>{
    signInWithEmailAndPassword(auth, values.email , values.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessagr",error.message )
  });
  }
  return(
    <>
    <AppLayout>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={login}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Email Address"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email address!',
        },
        {
          pattern:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message:"please enter correct email"
        }
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  <div style={{display:"Flex" ,justifyContent:"Center"}}>
    Don`t have account? <Link to="/signup"> SignUp</Link>
  </div>
  </AppLayout>
  </>
)};
export default LoginPage;