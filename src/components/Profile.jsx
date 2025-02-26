import React, { useState } from 'react';
import { Card, Avatar, Tabs, Form, Input, Button, Switch, message } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import 'tailwindcss/tailwind.css';

const { TabPane } = Tabs;

// Configure global message positioning
message.config({
  top: 50,
  duration: 2,
});

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [settings, setSettings] = useState({
    follows: true,
    answers: false,
    mentions: true,
    launches: false,
    updates: true,
    newsletter: true,
  });

  const handleTabChange = (key) => setActiveTab(key);

  const toggleSetting = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="flex p-6 gap-6 mt-12">
      {/* Left Section */}
      <Card className="w-1/3 bg-white shadow-lg flex flex-col items-center p-4" style={{ height: '320px' }}>
        <Avatar size={150} src="https://via.placeholder.com/150" className="mx-auto" />
        <h2 className="text-center text-xl mt-4">Sub-Admin Name</h2>
        <p className="text-center text-gray-500">Sub-Admin</p>
      </Card>

      {/* Right Section */}
      <Card className="w-2/3 bg-white shadow-lg" style={{ height: '545px' }}>
        <Tabs activeKey={activeTab} onChange={handleTabChange} tabBarGutter={20} className="mb-6">
          <TabPane tab="Overview" key="overview" />
          <TabPane tab="Edit Profile" key="edit" />
          <TabPane tab="Settings" key="settings" />
          <TabPane tab="Change Password" key="password" />
        </Tabs>

        {activeTab === 'overview' && (
          <div className="p-8" style={{ marginTop: '-20px' }}>
            <h2 className="text-3xl font-semibold mb-4 text-gray-500">Profile <span style={{ color: '#1890ff' }}>Information</span></h2>
            <p className="mb-4 text-gray-500">Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
            <p className="mb-4 text-gray-500"><strong style={{ color: '#1890ff' }}>Full Name:</strong> Alec M. Thompson</p>
            <p className="mb-4 text-gray-500"><strong style={{ color: '#1890ff' }}>Mobile:</strong> (44) 123 1234 123</p>
            <p className="mb-4 text-gray-500"><strong style={{ color: '#1890ff' }}>Email:</strong> alecthompson@mail.com</p>
            <p className="mb-4 text-gray-500"><strong style={{ color: '#1890ff' }}>Location:</strong> USA</p>
            <p className="mb-4 text-gray-500"> <strong style={{ color: '#1890ff' }}>Social:</strong> <FacebookOutlined className="mx-2 text-gray-500" /> <TwitterOutlined className="mx-2 text-gray-500" /><InstagramOutlined className="mx-2 text-gray-500" /></p>
          </div>
        )}

        {activeTab === 'edit' && (
          <div className="bg-white rounded-lg shadow-lg p-8 w-96 mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-500">Edit<span style={{ color: '#1890ff' }}> Profile</span></h2>
            <Form layout="vertical" >
              <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}> <Input className="rounded-md" /> </Form.Item>
              <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}> <Input className="rounded-md" /> </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full bg-gray-500 hover:bg-gray-800 text-white rounded-md">Save</Button>
              </Form.Item>
            </Form>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-500">Platform <span style={{ color: '#1890ff' }}> Settings</span></h2>
            <div className="mb-2">
              {/* <h3 className="text-lg font-semibold text-blue-500">ACCOUNT</h3>
              <div className="flex items-center justify-between my-2">
                <span className="text-gray-500">Email me when someone follows me</span>
                <Switch checked={settings.follows} onChange={() => toggleSetting('follows')} />
              </div>
              <div className="flex items-center justify-between my-2">
                <span className="text-gray-500">Email me when someone answers on my post</span>
                <Switch checked={settings.answers} onChange={() => toggleSetting('answers')} />
              </div>
              <div className="flex items-center justify-between my-2">
                <span className="text-gray-500">Email me when someone mentions me</span>
                <Switch checked={settings.mentions} onChange={() => toggleSetting('mentions')} />
              </div> */}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-500">APPLICATION</h3>
              {/* <div className="flex items-center justify-between my-2">
                <span className="text-gray-500">Notify me when sameone visit my app</span>
                <Switch checked={settings.launches} onChange={() => toggleSetting('launches')} />
              </div> */}
              <div className="flex items-center justify-between my-2">
                <span className="text-gray-500">Notify me when sameone makes signup</span>
                <Switch checked={settings.updates} onChange={() => toggleSetting('updates')} />
              </div>
              <div className="flex items-center justify-between my-2">
                <span className="text-gray-500">notify me when sameone makes login</span>
                <Switch checked={settings.newsletter} onChange={() => toggleSetting('newsletter')} />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'password' && (
          <div className="bg-white rounded-lg shadow-lg p-8 w-96 mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-500">Change <span style={{ color: '#1890ff' }}>Password</span></h2>
            <Form layout="vertical">
              <Form.Item label="New Password" name="newPassword" rules={[{ required: true, message: 'Please input your new password!' }]}> <Input.Password className="rounded-md" /> </Form.Item>
              <Form.Item label="Confirm Password" name="confirmPassword" rules={[{ required: true, message: 'Please confirm your password!' }]}> <Input.Password className="rounded-md" /> </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full bg-gray-500 hover:bg-gray-800 text-white rounded-md">Save</Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Profile;
