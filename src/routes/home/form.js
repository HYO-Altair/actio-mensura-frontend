import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 4,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 4,
  },
};

const Demo = () => {
  const onFinish = values => {
    console.log('Success:', values);
    window.location = "/statistics"
    
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="ServerID"
        name="serverID"
        rules={[
          {
            required: true, 
            message: 'Please input your serverID!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
        Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Demo