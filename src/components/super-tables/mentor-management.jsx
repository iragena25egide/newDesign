import React,{useState} from 'react';
import { Card, Table, Tag ,Space,Button,Modal} from 'antd';
import { UserOutlined, MailOutlined, CalendarOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const MentorManagement = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentorsData = [
    {
      key: '1',
      mentor_name: 'John Doe',
      email: 'john@example.com',
      join_date: '2022-01-15',
      status: 'Active',
      courses_assigned: 3,
    },
    // ...more mentors
  ];

 const columns = [
  {
    title: <input type="checkbox" />, 
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: () => <input type="checkbox" />
  },
  { 
    title: 'Mentor Name', 
    dataIndex: 'mentor_name', 
    key: 'mentor_name', 
    render: name => <span><UserOutlined /> {name}</span> 
  },
  { 
    title: 'Email', 
    dataIndex: 'email', 
    key: 'email', 
    render: email => <span><MailOutlined /> {email}</span> 
  },
  { 
    title: 'Join Date', 
    dataIndex: 'join_date', 
    key: 'join_date', 
    render: date => <span><CalendarOutlined /> {date}</span> 
  },
  { 
    title: 'Status', 
    dataIndex: 'status', 
    key: 'status', 
    render: status => <Tag color={status === 'Active' ? 'green' : 'red'}>{status}</Tag> 
  },
  { 
    title: 'Courses Assigned', 
    dataIndex: 'courses_assigned', 
    key: 'courses_assigned' 
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary" danger onClick={() => handleDelete(record.key)}>
          Delete
        </Button>
        <Button type="default" onClick={() => handleView(record.key)}>
          Account View
        </Button>
      </Space>
    ),
  },
];


  const data = [
    { key: '1', mentor_name: 'John Doe', email: 'john.doe@example.com', join_date: 'Jan 10, 2023', status: 'Active', courses_assigned: 5 },
    { key: '2', mentor_name: 'Jane Smith', email: 'jane.smith@example.com', join_date: 'Feb 15, 2023', status: 'Inactive', courses_assigned: 3 },
    { key: '3', mentor_name: 'Michael Brown', email: 'michael.brown@example.com', join_date: 'Mar 12, 2023', status: 'Active', courses_assigned: 7 },
    { key: '4', mentor_name: 'Emily Davis', email: 'emily.davis@example.com', join_date: 'Apr 20, 2023', status: 'Active', courses_assigned: 4 },
    { key: '5', mentor_name: 'Sarah Wilson', email: 'sarah.wilson@example.com', join_date: 'May 5, 2023', status: 'Inactive', courses_assigned: 2 }
  ];

  const handleView = (key) => {
    const mentor = mentorsData.find((m) => m.key === key);
    setSelectedMentor(mentor);
    setModalVisible(true);
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100 mt-12">
      <Card title="Mentor Management Overview">
        <Table columns={columns} dataSource={data} pagination={false} />

        <Modal
        visible={modalVisible}
        title="Mentor Information"
        onCancel={() => setModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setModalVisible(false)}>
            Close
          </Button>,
        ]}
      >
        {selectedMentor && (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <div className="mb-4">
      <h2 className="text-xl font-bold text-gray-800">{selectedMentor.mentor_name}</h2>
      <p className="text-sm text-gray-500">{selectedMentor.email}</p>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="font-semibold text-gray-700">Join Date</p>
        <p>{selectedMentor.join_date}</p>
      </div>
      <div>
        <p className="font-semibold text-gray-700">Status</p>
        <p>{selectedMentor.status}</p>
      </div>
      <div className="col-span-2">
        <p className="font-semibold text-gray-700">Courses Assigned</p>
        <p>{selectedMentor.courses_assigned}</p>
      </div>
    </div>
  </div>
)}
      </Modal>
      </Card>
    </div>
  );
};

export default MentorManagement;
