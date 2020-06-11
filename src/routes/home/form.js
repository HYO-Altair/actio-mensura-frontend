import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import {useState, useEffect} from 'react';

const Demo = () => {

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});

  }, []);

  const onFinish = values => {
    console.log('Success:', values);
    window.location = "/statistics"
    
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div>

    
    <div>
      <h1 className = "logo">
        ACTIO MENSURA
      </h1>
    </div>
    <div className = "form">
      <Form form = {form}
       layout="inline"
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
      name="basic"
      initialValues={{
        remember: true,
      }}
     
    >
      <Form.Item

        name="serverID"
        rules={[
          {
            required: true, 
            message: 'Please input your serverID!',
          },
        ]}
      >
        <Input placeholder = "Enter your serverID"/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
        Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    <div className = "footer">
      <p>
  
      </p>
      <p>
        A bot to track your discord server activity | By Team Altair
      </p>
      <p>
        
      </p>
    </div>
    </div>
  );
};

export default Demo