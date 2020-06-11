import React from "react";
import { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";

import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
export default function Home(props) {
  const [form] = Form.useForm();
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [id, setID] = React.useState("");
  const handleIDChange = (e) => {
    if (e.target.value === "") setButtonDisabled(true);
    else setButtonDisabled(false);
    setID(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className='body'>
      <div className='main'>
        <div>
          <div>
            <h1 className='logo'>ACTIO MENSURA</h1>
          </div>
          <div className='form'>
            <Form
              form={form}
              layout='inline'
              name='basic'
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name='serverID'
                rules={[
                  {
                    required: true,
                    message: "Please input your serverID!",
                  },
                ]}
              >
                <Input
                  placeholder='Enter your serverID'
                  onChange={(e) => handleIDChange(e)}
                />
              </Form.Item>

              <Form.Item>
                <Link to={{ pathname: "/statistics", search: "?id=" + id }}>
                  <Button
                    type='primary'
                    htmlType='button'
                    disabled={buttonDisabled}
                  >
                    Submit
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </div>
          <div className='footer'>
            <p></p>
            <p>A bot to track your discord server activity | By Team Altair</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
