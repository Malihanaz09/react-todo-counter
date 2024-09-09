import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, auth } from '../component/firebase/firebase';
import AppLayout from './Layout';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const SignUpPage = () =>{
  const registerUser = (values)=>{
    createUserWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("user", user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("errorMessage",error.message)
    });
  }
  return (
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
    onFinish={registerUser}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="firstname"
      name="firstname"
      rules={[
        {
          required: true,
          message: 'Please input your firstname!',
        },
      ]}
    >
      <Input />
      </Form.Item>
      <Form.Item
      label="lastname"
      name="lastname"
      rules={[
        {
          required: true,
          message: 'Please input your lastname!',
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
   You have account? <Link to="/login"> login now</Link>
 </div>
 </AppLayout>
 </>
)};
export default SignUpPage;