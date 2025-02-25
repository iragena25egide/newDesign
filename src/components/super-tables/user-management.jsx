import React, { useState } from 'react';
import { Card, Dropdown, Menu, Table, Tag } from 'antd';
import { MoreOutlined, BookOutlined, FileDoneOutlined, EditOutlined, UsergroupAddOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const UserManagement = () => {
  


  const columns = [
    {
      title: <input type="checkbox" />, 
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <input type="checkbox" />
    },
    { title: 'Fullname', dataIndex: 'Fullname', key: 'Fullname' },
    { title: 'Username', dataIndex: 'Username', key: 'Username' },
    { title: 'Email', dataIndex: 'Email', key: 'Email' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'online' ? 'green' : status === 'offline' ? 'blue' : 'blue'}>{status}</Tag> },
//     { title: 'course_title', dataIndex: 'course_title', key: 'course_title' },
//     { title: 'course_status', dataIndex: 'course_status', key: 'course_status', render: course_status => <Tag color={course_status === 'ended' ? 'green' : course_status === 'pending' ? 'red' : 'blue'}>{course_status}</Tag> },
  ];

  const data = [
    { key: '1', Fullname: 'Dalton', Username: 'DALTON',Email: 'user@personal.com',status: 'online',  },
    { key: '2', Fullname: 'Dalton', Username: 'DALTON',Email: 'user@personal.com',status: 'offline',},
    { key: '3', Fullname: 'Dalton', Username: 'EGIDE',Email: 'user@personal.com', status: 'online',  },
    { key: '4', Fullname: 'Dalton', Username: 'EGIGDE',Email: 'user@personal.com',status: 'offline', },
    { key: '5', Fullname: 'Dalton', Username: 'EGIDE',Email: 'user@personal.com', status: 'online',  },
    { key: '6', Fullname: 'Dalton', Username: 'DALTON',Email: 'user@personal.com',status: 'offline', },
    { key: '7', Fullname: 'Dalton', Username: 'DALTON',Email: 'user@personal.com', status: 'online',  },
    { key: '8', Fullname: 'Dalton', Username: 'BATIZO',Email: 'user@personal.com',status: 'offline', },
    { key: '9', Fullname: 'Dalton', Username: 'BATIZO',Email: 'user@personal.com', status: 'online',  },
  ];

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 mt-12">
      <Card title="Users Overview">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
};

export default UserManagement;
