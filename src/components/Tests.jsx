import React, { useState } from "react";
import { Card, Button, Input, Form, Table, Dropdown, Menu, Modal, message, Checkbox } from "antd";
import { PlusOutlined, MoreOutlined, CloseOutlined, SearchOutlined, FilterOutlined, SettingOutlined } from "@ant-design/icons";
import AddTestForm from "./Test/AddTestForm";
import ViewTest from "./Test/ViewTest";
import UploadVideoForm from "./Test/AddTestVideoForm";
import ManageTestVideos from "./Test/ManageTestVideos";
import UpdateTestForm from "./Test/UpdateTestForm";

const { TextArea } = Input;

const Tests = () => {
  const [tests, setTests] = useState([
    {
      key: 1,
      title: "React for Beginners",
      description: "Learn the basics of React, including components, hooks, and state management.",
      timestamp: new Date().toLocaleString(),
      modules: [],
      videos: [],
    },
    {
      key: 2,
      title: "Advanced React",
      description: "Deep dive into React hooks, context API, and performance optimization.",
      timestamp: new Date().toLocaleString(),
      modules: [],
      videos: [],
    },
  ]);

  const [form] = Form.useForm();
  const [modalContent, setModalContent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  const handleAddTest = (values) => {
    const newTest = {
      key: Date.now(),
      title: values.title,
      description: values.description,
      timestamp: new Date().toLocaleString(),
      modules: [],
      videos: [],
    };
    setTests((prevTests) => [...prevTests, newTest]);
    form.resetFields();
    message.success("Test added successfully");
  };

  const handleMenuClick = (key, test) => {
    setSelectedTest(test);
    switch (key) {
      case "add_test":
        openModal(<AddTestForm test={test} onSave={handleSaveTest} />);
        break;
      case "view_test":
        openModal(<ViewTest test={test} />);
        break;
      case "upload_test_video":
        openModal(<UploadVideoForm test={test} onSave={handleSaveVideo} />);
        break;
      case "manage_test_video":
        openModal(<ManageTestVideos test={test} />);
        break;
      case "update_test":
        openModal(<UpdateTestForm test={test} onSave={handleUpdateTest} />);
        break;
      case "delete_test":
        handleDeleteTest(test.key);
        break;
      default:
        break;
    }
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

  const handleSaveTest = (module) => {
    const updatedTests = tests.map((test) => {
      if (test.key === selectedTest.key) {
        return { ...test, modules: [...test.modules, module] };
      }
      return test;
    });
    setTests(updatedTests);
    closeModal();
  };

  const handleSaveVideo = (video) => {
    const updatedTests = tests.map((test) => {
      if (test.key === selectedTest.key) {
        return { ...test, videos: [...test.videos, video] };
      }
      return test;
    });
    setTests(updatedTests);
    closeModal();
  };

  const handleUpdateTest = (updatedTest) => {
    const updatedTests = tests.map((test) =>
      test.key === updatedTest.key ? updatedTest : test
    );
    setTests(updatedTests);
    closeModal();
  };

  const handleDeleteTest = (key) => {
    setTests(tests.filter((test) => test.key !== key));
    message.success("Test deleted successfully");
  };

  const getMenu = (test) => (
    <Menu onClick={({ key }) => handleMenuClick(key, test)}>
      <Menu.Item key="add_test" style={{ color: "#1890ff" }}>Add Module/Chapter</Menu.Item>
      <Menu.Item key="view_test" style={{ color: "#52c41a" }}>View Module/Chapter</Menu.Item>
      <Menu.Item key="upload_test_video" style={{ color: "#faad14" }}>Upload Video</Menu.Item>
      <Menu.Item key="manage_test_video" style={{ color: "#722ed1" }}>Manage Video</Menu.Item>
      <Menu.Item key="update_test" style={{ color: "#13c2c2" }}>Update Test</Menu.Item>
      <Menu.Item key="delete_test" style={{ color: "#f5222d" }}>Delete Test</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: <Checkbox />,
      key: "checkbox",
      render: () => <Checkbox />, 
    },
    {
      title: "Test Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Timestamp",
      dataIndex: "timestamp",
      key: "timestamp",
    },
    {
      title: "Action",
      key: "action",
      render: (_, test) => (
        <Dropdown overlay={getMenu(test)} trigger={["click"]}>
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col" style={{ backgroundImage: 'linear-gradient(to bottom, #1890ff 50%, #F8FAFC 50%)' }}>
      <div className="relative h-56 bg-cover bg-center">
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <Button size="large" style={{ backgroundColor: 'transparent', opacity: 1, borderWidth: '1.5px', borderColor: 'white', color: 'white' }}>
            Manage Tests
          </Button>
        </div>
      </div>

      <div className="flex flex-1 p-4 space-x-4" style={{ backgroundColor: '#F8FAFC' }}>
        <Card title="Add New Test" className="w-1/2">
          <Form form={form} layout="vertical" onFinish={handleAddTest}>
            <Form.Item name="title" label="Test Title" rules={[{ required: true, message: "Please input the test title!" }]}> 
              <Input placeholder="Enter test title" />
            </Form.Item>
            <Form.Item name="description" label="Test Description" rules={[{ required: true, message: "Please input the test description!" }]}> 
              <TextArea rows={4} placeholder="Enter test description" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>Add Test</Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="Recent Tests" className="w-1/2" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <ul className="space-y-2">
            {tests.map((test, index) => (
              <li key={test.key} className="p-2 bg-gray-100 rounded flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{`${index + 1}. ${test.title}`}</h4>
                  <p>{test.description}</p>
                </div>
                <span className="text-sm text-gray-600 self-start">{test.timestamp}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="p-4">
        <Card title="All Tests">
          <div className="flex justify-between mb-2">
            <div>
              <Button icon={<SearchOutlined />} />
              <Button icon={<FilterOutlined />} className="ml-2" />
              <Button icon={<SettingOutlined />} className="ml-2" />
            </div>
          </div>
          <Table 
            dataSource={tests} 
            columns={columns} 
            pagination={false}
            rowKey="key"
            bordered
            scroll={{ y: 200 }}
          />
        </Card>
      </div>

      <Modal
        open={isModalVisible}
        footer={null}
        onCancel={closeModal}
        closeIcon={<CloseOutlined />}
        centered
        maskClosable={false}
        bodyStyle={{ padding: '20px' }}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default Tests;