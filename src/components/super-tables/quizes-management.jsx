import React from 'react';
import { Card, Table, Tag } from 'antd';
import { FileDoneOutlined, UserOutlined, CalendarOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const QuizzesManagement = () => {
  const columns = [
    {
      title: <input type="checkbox" />, 
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <input type="checkbox" />
    },
    { title: 'Quiz Title', dataIndex: 'quiz_title', key: 'quiz_title', render: title => <span><FileDoneOutlined /> {title}</span> },
    { title: 'Instructor', dataIndex: 'instructor', key: 'instructor', render: instructor => <span><UserOutlined /> {instructor}</span> },
    { title: 'Date', dataIndex: 'date', key: 'date', render: date => <span><CalendarOutlined /> {date}</span> },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Completed' ? 'green' : status === 'Pending' ? 'orange' : 'red'}>{status}</Tag> },
    { title: 'Participants', dataIndex: 'participants', key: 'participants' }
  ];

  const data = [
    { key: '1', quiz_title: 'React Basics Quiz', instructor: 'John Doe', date: 'Mar 5, 2025', status: 'Completed', participants: 50 },
    { key: '2', quiz_title: 'Advanced JS Quiz', instructor: 'Jane Smith', date: 'Mar 10, 2025', status: 'Pending', participants: 40 },
    { key: '3', quiz_title: 'UI/UX Principles Quiz', instructor: 'Emily Davis', date: 'Mar 12, 2025', status: 'Completed', participants: 45 },
    { key: '4', quiz_title: 'Python Basics Quiz', instructor: 'Michael Brown', date: 'Mar 15, 2025', status: 'Pending', participants: 60 },
    { key: '5', quiz_title: 'Fullstack Dev Quiz', instructor: 'Sarah Wilson', date: 'Mar 20, 2025', status: 'Completed', participants: 55 }
  ];

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 mt-12">
      <Card title="Quizzes Management Overview">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
};

export default QuizzesManagement;
