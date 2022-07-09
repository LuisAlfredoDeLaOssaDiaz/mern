import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import "./MenuSider.scss";

export default function MenuSider(props) {
  const { Sider } = Layout;  
  const {collapsed} = props;
  console.log(collapsed)

  return (
    <>
      <Sider trigger={null} collapsible collapsed={collapsed} className="admin-sider">
        <Menu 
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
          theme="dark"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <Link to={"/admin"}>
              <HomeOutlined />
              <span className="nav-text">Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={"/admin/menu-web"}>
              <MenuOutlined />
              <span className="nav-text">Menu Web</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

