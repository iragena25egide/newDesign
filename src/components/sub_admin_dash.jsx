import React, { useState } from "react";
import { Input, Card, Button, Avatar, Badge } from "antd";
import { SearchOutlined, BellOutlined, SettingOutlined, UserOutlined, HomeOutlined, PaperClipOutlined, BoxPlotFilled, FileOutlined, BellFilled } from "@ant-design/icons";
import { Pie, Line } from "@ant-design/plots";
import { BookOutlined, FileDoneOutlined, FileTextOutlined, EditOutlined, UsergroupAddOutlined, MoreOutlined, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";

const SubDashboardRight = ({ userRole }) => {
  const navigate = useNavigate();

  const [pieData, setPieData] = useState([
    { type: "Active", value: 300, color: "#0000FF" },
    { type: "Offline", value: 200, color: "#FF0000" },
    { type: "Suspended", value: 150, color: "#008000" },
    { type: "Deleted", value: 400, color: "#FFFF00" },
  ]);

  const [tabs, setTabs] = useState([
    { type: "Courses", value: 300, color: "#0000FF" },
    { type: "Quizes", value: 200, color: "#FF0000" },
    { type: "Exams", value: 150, color: "#008000" },
    { type: "Users", value: 400, color: "#FFFF00" },
  ]);

  const handleMenuClick = (key) => {
    if (key === "Courses") navigate("/courses");
    if (key === "Quizes") navigate("/test");
  };

  const menu = (key) => (
    <Menu>
      <Menu.Item key="1" onClick={() => handleMenuClick(key)}>View All</Menu.Item>
    </Menu>
  );

  const [lineData, setLineData] = useState([
    { month: "Jan", courses: 100, tests: 80, exams: 50, users: 120 },
    { month: "Feb", courses: 120, tests: 90, exams: 70, users: 150 },
    { month: "Mar", courses: 200, tests: 130, exams: 100, users: 180 },
    { month: "Apr", courses: 250, tests: 140, exams: 120, users: 220 },
    { month: "May", courses: 300, tests: 160, exams: 150, users: 260 },
    { month: "Jun", courses: 280, tests: 170, exams: 170, users: 290 },
    { month: "Jul", courses: 320, tests: 180, exams: 200, users: 330 },
    { month: "Aug", courses: 340, tests: 190, exams: 220, users: 350 },
    { month: "Sep", courses: 370, tests: 200, exams: 250, users: 380 },
    { month: "Oct", courses: 400, tests: 210, exams: 270, users: 420 },
    { month: "Nov", courses: 420, tests: 220, exams: 290, users: 450 },
    { month: "Dec", courses: 450, tests: 230, exams: 300, users: 480 },
  ]);

  return (
    <div className="p-4 text-white min-h-screen w-full ml-auto" style={{backgroundImage: 'linear-gradient(to bottom, #1890ff 50%, #F8FAFC 50%)', borderBottomLeftRadius: '100px'}}>
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-white-500"><HomeOutlined /> / Dashboard</span>
          <h2 className="text-xl font-bold text-white-500">Dashboard</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-10">
        {tabs.map((item, index) => (
          <Card key={index} className="relative" style={{ backgroundColor: '#ffffff', borderRadius: '12px' }}>
            <div className="flex justify-between items-start">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex justify-center items-center"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  backgroundColor: ['#E6F7FF', '#FFF1F0', '#F6FFED', '#FFE5AC'][index] || '#FFE5AC',
                }}
              >
                {[<BookOutlined />, <FileDoneOutlined />, <EditOutlined />, <UsergroupAddOutlined />][index]}
              </motion.div>
              <Dropdown overlay={menu(item.type)} trigger={["hover"]}>
                <MoreOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
              </Dropdown>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 text-sm">{item.type}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="p-4" style={{ backgroundColor:'#ffffff' }}>
          <h3 className="text-black font-bold">Users</h3>
          <div className="flex justify-center items-center h-72">
            <Pie
              data={pieData}
              angleField="value"
              colorField="type"
              radius={0.8}
              innerRadius={0.4}
              legend={{ position: 'top', offsetY: -20 }}
            />
          </div>
        </Card>

        <Card className="p-4" style={{ backgroundColor:'#ffffff' }}>
          <div className="flex flex-wrap justify-between items-center">
            <h3 className="text-black font-bold">Activity Overview</h3>
            <div className="flex space-x-2 mt-2 lg:mt-0">
              {(() => {
                const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];
                return ['Courses', 'Tests', 'Exams', 'Users'].map((label, idx) => (
                  <button 
                    key={idx} 
                    className="flex items-center space-x-1 px-2 py-1 border border-transparent rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2"
                    style={{ color: colors[idx], borderColor: colors[idx], boxShadow: `0 0 0 2px ${colors[idx]}40` }}
                  >
                    <span style={{ color: colors[idx], fontSize: '12px', display: 'flex', alignItems: 'center' }}>
                      {[<FileOutlined />, <FileDoneOutlined />, <EditOutlined />, <UsergroupAddOutlined style={{ fontSize: '20px' }} />][idx]}
                    </span>
                    <span>{label}</span>
                  </button>
                ));
              })()}
            </div>
          </div>

          <div style={{ height: '300px' }}>
            <Line
              data={lineData.flatMap(item => [
                { month: item.month, value: item.courses, category: 'Courses' },
                { month: item.month, value: item.tests, category: 'Tests' },
                { month: item.month, value: item.exams, category: 'Exams' },
                { month: item.month, value: item.users, category: 'Users' },
              ])}
              xField="month"
              yField="value"
              seriesField="category"
              meta={{
                category: {
                  alias: 'Category',
                  range: ['#0000FF', '#FF0000', '#008000', '#FFFF00']
                }
              }}
              color={({ category }) => ({
                'Courses': '#0000FF',
                'Tests': '#FF0000',
                'Exams': '#008000',
                'Users': '#FFFF00'
              }[category])}
              legend={{ position: 'top' }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SubDashboardRight;