import React from "react";
import { Dropdown, Menu, Card, Badge, Button } from "antd";
import { BellOutlined, BellFilled, UserOutlined, FileOutlined, LogoutOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const notifications = [
  { id: 1, message: "New message from Alice", date: "2025-02-23" },
  { id: 2, message: "Your order has been shipped", date: "2025-02-22" },
  { id: 3, message: "Reminder: Meeting at 3 PM", date: "2025-02-21" },
  
];

const NotificationPanel = () => {

  const [showMore, setShowMore] = useState(true);
  const menuProfile = (
    <Menu className="rounded-lg shadow-lg border border-gray-200 w-[200px]">
      <div className="flex justify-center items-center flex-col">
        <img src="https://i.pravatar.cc/40" alt="User" className="rounded-full w-[100px] h-[100px] border border-gray-200" />
        <h4 className="text-xl font-bold text-gray-600 text-center">Mu Baptiste</h4>
        <h5 className="text-center text-gray-600">mubaptiste@gmail.com</h5>
        <p className="text-green-600 text-center">9 students active</p>
      </div>
      <hr />
      <Link to={"/profile"}>
      <Menu.Item key="profile" icon={<UserOutlined />} className="hover:bg-gray-100 p-2 rounded-md">
        Profile
      </Menu.Item>
      </Link>
      <Link to={"/courses"}>
      <Menu.Item key="courses" icon={<FileOutlined />} className="hover:bg-gray-100 p-2 rounded-md">
        My courses
      </Menu.Item>
      </Link>
      
      <Menu.Divider />
     
      <Menu.Divider />
      <Link to={"/notifications"}>
      <Menu.Item key="notifications" icon={<BellFilled />} className="hover:bg-gray-100 p-2 rounded-md">
        Notifications
      </Menu.Item>
      </Link>
     
      <Menu.Divider />
      <p className="text-center text-xs opacity-40">A product of ScriptyLabs</p>
      <Link to={"/"}>
      <Menu.Item key="logout" icon={<LogoutOutlined />} danger className="hover:bg-red-100 p-2 rounded-md">
        Logout
      </Menu.Item>
      </Link>
     
    </Menu>
  );

  const notificationMenu = (
    <Card className="rounded-lg shadow-xl border border-gray-300 w-80 bg-white">
      <div className="px-4 py-2 text-lg font-semibold border-b">Notifications</div>
      <div className="max-h-64 overflow-auto">
        {notifications.map((notif) => (
          <div key={notif.id} className="py-2 px-4 rounded-md flex flex-col gap-1 mb-2">
            <div className="text-sm font-medium text-gray-800">{notif.message}</div>
            <div className="text-xs text-gray-500">{notif.date}</div>
          </div>
        ))}
        {notifications.length === 0 && (
          <div className="p-4 text-center text-gray-500">No notifications</div>
        )}
      </div>
      {notifications.length !== 0 && showMore && (
        <Link
          to="/notifications"
          onClick={() => setShowMore(false)}
          className="block text-center text-blue-500 mt-2"
        >
          More Notifications
        </Link>
      )}
    </Card>
  );

  return (
    <div className="flex items-center space-x-6 text-white">
      <Dropdown overlay={notificationMenu} trigger={["click"]} placement="bottomRight" overlayClassName="!rounded-lg">
        <motion.div whileTap={{ scale: 0.95 }}>
          <Badge count={notifications.length} className="cursor-pointer">
            <Button variant="ghost" className="px-2 py-5 hover:bg-gray-200 rounded-full transition-all shadow-md border-none">
              <BellOutlined className="text-2xl text-gray-700" />
            </Button>
          </Badge>
        </motion.div>
      </Dropdown>
      <Dropdown overlay={menuProfile} trigger={["click"]} placement="bottom" overlayClassName="!rounded-lg">
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button variant="ghost" className="flex items-center gap-2 py-5 px-2 rounded-lg transition-all border-none">
            <img src="https://i.pravatar.cc/40" alt="User" className="rounded-full h-[30px] w-[30px] border-none" />
            <span className="hidden md:inline font-medium text-gray-700">Mu Baptiste</span>
          </Button>
        </motion.div>
      </Dropdown>
    </div>
  );
};

export default NotificationPanel;
