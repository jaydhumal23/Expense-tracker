
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Expense Management System - Login";
  }, []);

  const gotoRegister = () => {
    navigate("/register");
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/v1/users/login", values); // values = { email, password }
      console.log(response.data);
      message.success("Login successful!");
      navigate("/home"); // redirect after login
    } catch (err) {
      console.error(err);
      message.error(err.response?.data?.message || "Login failed");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expense Management System
          </h1>
          <p className="text-gray-600 mt-2">Welcome back! Please login to your account</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg border-0 px-6 py-8">
          <div className="space-y-1 mb-6">
            <h2 className="text-2xl font-semibold text-center">Login</h2>
            <p className="text-center text-gray-600">Enter your email and password to Login</p>
          </div>

          <div className="space-y-4">
            <Form
              name="loginForm"
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  className="w-full h-11 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password
                  placeholder="Enter your password"
                  className="w-full h-11 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-11 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md transition-all duration-200"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>

            <div className="text-center pt-4">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <span
                  onClick={gotoRegister}
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline cursor-pointer"
                >
                  Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
