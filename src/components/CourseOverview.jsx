import React, { useState } from 'react';
import { Card, Dropdown, Menu, Table, Tag } from 'antd';
import { MoreOutlined, BookOutlined, FileDoneOutlined, EditOutlined, UsergroupAddOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const CourseOverview = () => {
  


  const columns = [
    {
      title: <input type="checkbox" />, 
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <input type="checkbox" />
    },
    { title: 'username', dataIndex: 'username', key: 'username' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'online' ? 'green' : status === 'offline' ? 'blue' : 'blue'}>{status}</Tag> },
    { title: 'Email', dataIndex: 'Email', key: 'Email' },
    { title: 'course_title', dataIndex: 'course_title', key: 'course_title' },
    { title: 'course_status', dataIndex: 'course_status', key: 'course_status', render: course_status => <Tag color={course_status === 'ended' ? 'green' : course_status === 'pending' ? 'red' : 'blue'}>{course_status}</Tag> },
  ];

  const data = [
    { key: '1', username: 'Dalton', date: 'Jan 6, 2022', status: 'online', Email: 'user@personal.com', course_title: 'React native', course_status: 'ended' },
    { key: '2', username: 'Dalton', date: 'Jan 6, 2022', status: 'offline', Email: 'user@personal.com', course_title: 'React native', course_status: 'pending' },
    { key: '3', username: 'Dalton', date: 'Jan 5, 2022', status: 'online', Email: 'user@personal.com', course_title: 'React native', course_status: 'ended' },
    { key: '4', username: 'Dalton', date: 'Jan 5, 2022', status: 'offline', Email: 'user@personal.com', course_title: 'React native', course_status: 'pending' },
    { key: '5', username: 'Dalton', date: 'Jan 5, 2022', status: 'online', Email: 'user@personal.com', course_title: 'React native', course_status: 'ended' },
    { key: '6', username: 'Dalton', date: 'Jan 4, 2022', status: 'offline', Email: 'user@personal.com', course_title: 'React native', course_status: 'pending' },
    { key: '7', username: 'Dalton', date: 'Jan 3, 2022', status: 'online', Email: 'user@personal.com', course_title: 'React native', course_status: 'ended' },
    { key: '8', username: 'Dalton', date: 'Jan 3, 2022', status: 'offline', Email: 'user@personal.com', course_title: 'React native', course_status: 'pending' },
    { key: '9', username: 'Dalton', date: 'Jan 3, 2022', status: 'online', Email: 'user@personal.com', course_title: 'React native', course_status: 'ended' },
  ];

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 mt-12">
      <Card title="Courses Overview">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
};

export default CourseOverview;
