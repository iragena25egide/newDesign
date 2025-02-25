import React from 'react';
import { Card, Table, Tag } from 'antd';
import { BookOutlined, UserOutlined, CalendarOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const CourseManagement = () => {
  const columns = [
    {
      title: <input type="checkbox" />,
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <input type="checkbox" />
    },
    { title: 'Course Title', dataIndex: 'course_title', key: 'course_title', render: title => <span><BookOutlined /> {title}</span> },
    { title: 'Instructor', dataIndex: 'instructor', key: 'instructor', render: instructor => <span><UserOutlined /> {instructor}</span> },
    { title: 'Start Date', dataIndex: 'start_date', key: 'start_date', render: date => <span><CalendarOutlined /> {date}</span> },
    { title: 'Status', dataIndex: 'status', key: 'status', render: status => <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag> },
    { title: 'Enrolled Students', dataIndex: 'students', key: 'students' }
  ];

  const data = [
    { key: '1', course_title: 'React Native Basics', instructor: 'John Doe', start_date: 'Mar 1, 2025', status: 'Active', students: 120 },
    { key: '2', course_title: 'Advanced JavaScript', instructor: 'Jane Smith', start_date: 'Feb 15, 2025', status: 'Inactive', students: 85 },
    { key: '3', course_title: 'UI/UX Design', instructor: 'Emily Davis', start_date: 'Apr 10, 2025', status: 'Active', students: 95 },
    { key: '4', course_title: 'Python for Beginners', instructor: 'Michael Brown', start_date: 'Jan 20, 2025', status: 'Inactive', students: 150 },
    { key: '5', course_title: 'Fullstack Web Development', instructor: 'Sarah Wilson', start_date: 'Mar 18, 2025', status: 'Active', students: 110 }
  ];

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 mt-12">
      <Card title="Course Management Overview">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
};

export default CourseManagement;
