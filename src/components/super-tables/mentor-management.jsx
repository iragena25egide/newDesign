import React from 'react';
import { Card, Table, Tag } from 'antd';
import { UserOutlined, MailOutlined, CalendarOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const MentorManagement = () => {
  const columns = [
    {
      title: <input type="checkbox" />, 
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <input type="checkbox" />
    },
    { title: 'Mentor Name', dataIndex: 'mentor_name', key: 'mentor_name', render: name => <span><UserOutlined /> {name}</span> },
    { title: 'Email', dataIndex: 'email', key: 'email', render: email => <span><MailOutlined /> {email}</span> },
    { title: 'Join Date', dataIndex: 'join_date', key: 'join_date', render: date => <span><CalendarOutlined /> {date}</span> },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag> },
    { title: 'Courses Assigned', dataIndex: 'courses_assigned', key: 'courses_assigned' }
  ];

  const data = [
    { key: '1', mentor_name: 'John Doe', email: 'john.doe@example.com', join_date: 'Jan 10, 2023', status: 'Active', courses_assigned: 5 },
    { key: '2', mentor_name: 'Jane Smith', email: 'jane.smith@example.com', join_date: 'Feb 15, 2023', status: 'Inactive', courses_assigned: 3 },
    { key: '3', mentor_name: 'Michael Brown', email: 'michael.brown@example.com', join_date: 'Mar 12, 2023', status: 'Active', courses_assigned: 7 },
    { key: '4', mentor_name: 'Emily Davis', email: 'emily.davis@example.com', join_date: 'Apr 20, 2023', status: 'Active', courses_assigned: 4 },
    { key: '5', mentor_name: 'Sarah Wilson', email: 'sarah.wilson@example.com', join_date: 'May 5, 2023', status: 'Inactive', courses_assigned: 2 }
  ];

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 mt-12">
      <Card title="Mentor Management Overview">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
};

export default MentorManagement;
