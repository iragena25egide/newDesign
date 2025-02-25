import React, { useState } from "react";
import { Card, Button, Input, Form, Table, Dropdown, Menu, Modal, message, Checkbox } from "antd";
import { PlusOutlined, MoreOutlined, CloseOutlined, SearchOutlined, FilterOutlined, SettingOutlined } from "@ant-design/icons";
import AddModuleForm from "./courses/AddModuleForm";
import ViewModules from "./courses/ViewModules";
import UploadVideoForm from "./courses/AddVideoForm";
import ManageVideos from "./courses/ManageVideos";
import UpdateCourseForm from "./courses/UpdateCourseForm";

const { TextArea } = Input;

const Courses = () => {
  const [courses, setCourses] = useState([
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
      title: "React for Beginners",
      description: "Learn the basics of React, including components, hooks, and state management.",
      timestamp: new Date().toLocaleString(),
      modules: [],
      videos: [],
    },{
      key: 3,
      title: "React for Beginners",
      description: "Learn the basics of React, including components, hooks, and state management.",
      timestamp: new Date().toLocaleString(),
      modules: [],
      videos: [],
    },{
      key: 4,
      title: "React for Beginners",
      description: "Learn the basics of React, including components, hooks, and state management.",
      timestamp: new Date().toLocaleString(),
      modules: [],
      videos: [],
    },
  ]);

  const [form] = Form.useForm();
  const [modalContent, setModalContent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleAddCourse = (values) => {
    const newCourse = {
      key: Date.now(),
      title: values.title,
      description: values.description,
      timestamp: new Date().toLocaleString(),
      modules: [],
      videos: [],
    };
    setCourses((prevCourses) => [...prevCourses, newCourse]);
    form.resetFields();
    message.success("Course added successfully");
  };

  const handleMenuClick = (key, course) => {
    setSelectedCourse(course);
    switch (key) {
      case "add_module":
        openModal(<AddModuleForm course={course} onSave={handleSaveModule} />);
        break;
      case "view_modules":
        openModal(<ViewModules course={course} />);
        break;
      case "upload_video":
        openModal(<UploadVideoForm course={course} onSave={handleSaveVideo} />);
        break;
      case "manage_video":
        openModal(<ManageVideos course={course} />);
        break;
      case "update_course":
        openModal(<UpdateCourseForm course={course} onSave={handleUpdateCourse} />);
        break;
      case "delete_course":
        handleDeleteCourse(course.key);
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

  const handleSaveModule = (module) => {
    const updatedCourses = courses.map((course) => {
      if (course.key === selectedCourse.key) {
        return { ...course, modules: [...course.modules, module] };
      }
      return course;
    });
    setCourses(updatedCourses);
    closeModal();
  };

  const handleSaveVideo = (video) => {
    const updatedCourses = courses.map((course) => {
      if (course.key === selectedCourse.key) {
        return { ...course, videos: [...course.videos, video] };
      }
      return course;
    });
    setCourses(updatedCourses);
    closeModal();
  };

  const handleUpdateCourse = (updatedCourse) => {
    const updatedCourses = courses.map((course) =>
      course.key === updatedCourse.key ? updatedCourse : course
    );
    setCourses(updatedCourses);
    closeModal();
  };

  const handleDeleteCourse = (key) => {
    setCourses(courses.filter((course) => course.key !== key));
    message.success("Course deleted successfully");
  };

  const getMenu = (course) => (
    <Menu onClick={({ key }) => handleMenuClick(key, course)}>
      <Menu.Item key="add_module" style={{ color: "#1890ff" }}>Add Module</Menu.Item>
      <Menu.Item key="view_modules" style={{ color: "#52c41a" }}>View Modules</Menu.Item>
      <Menu.Item key="upload_video" style={{ color: "#faad14" }}>Upload Video</Menu.Item>
      <Menu.Item key="manage_video" style={{ color: "#722ed1" }}>Manage Video</Menu.Item>
      <Menu.Item key="update_course" style={{ color: "#13c2c2" }}>Update Course</Menu.Item>
      <Menu.Item key="delete_course" style={{ color: "#f5222d" }}>Delete Course</Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: <Checkbox />,
      key: "checkbox",
      render: () => <Checkbox />, // Fixed: Removed dataIndex
    },
    {
      title: "Course Title",
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
      render: (_, course) => (
        <Dropdown overlay={getMenu(course)} trigger={["click"]}>
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
            Manage Courses
          </Button>
        </div>
      </div>

      <div className="flex flex-1 p-4 space-x-4" style={{ backgroundColor: '#F8FAFC' }}>
        <Card title="Add New Course" className="w-1/2">
          <Form form={form} layout="vertical" onFinish={handleAddCourse}>
            <Form.Item name="title" label="Course Title" rules={[{ required: true, message: "Please input the course title!" }]}> 
              <Input placeholder="Enter course title" />
            </Form.Item>
            <Form.Item name="description" label="Course Description" rules={[{ required: true, message: "Please input the course description!" }]}> 
              <TextArea rows={4} placeholder="Enter course description" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>Add Course</Button>
            </Form.Item>
          </Form>
        </Card>

        <Card title="Recent Courses" className="w-1/2" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <ul className="space-y-2">
            {courses.map((course, index) => (
              <li key={course.key} className="p-2 bg-gray-100 rounded flex justify-between items-start">
                <div>
                  <h4 className="font-bold">{`${index + 1}. ${course.title}`}</h4>
                  <p>{course.description}</p>
                </div>
                <span className="text-sm text-gray-600 self-start">{course.timestamp}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="p-4">
        <Card title="All Courses">
          <div className="flex justify-between mb-2">
            <div>
              <Button icon={<SearchOutlined />} />
              <Button icon={<FilterOutlined />} className="ml-2" />
              <Button icon={<SettingOutlined />} className="ml-2" />
            </div>
          </div>
          <Table 
            dataSource={courses} 
            columns={columns} 
            pagination={false}
            rowKey="key"
            bordered
            scroll={{ y: 200 }} // Updated scroll height
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

export default Courses; 
