import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Layout, Menu } from "antd";
import FormCreateTask from "../Forms/FormCreateTask/FormCreateTask";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export default function SidebarCyberbugs() {
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(true);

  return (
    <div style={{ position: "fixed", height: "100vh", zIndex: "2" }}>
      <Layout style={{ height: "100%", position: "absolute" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="text-center">
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger text-xl text-white py-5",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item
              key="1"
              icon={<PlusOutlined />}
              onClick={() => {
                dispatch({
                  type: "OPEN_FORM_CREATE_TASK",
                  Component: <FormCreateTask />,
                  title: "Create task",
                });
              }}
            >
              Create task
            </Menu.Item>
            <Menu.Item key="2" icon={<SearchOutlined />}>
              Search
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
}
