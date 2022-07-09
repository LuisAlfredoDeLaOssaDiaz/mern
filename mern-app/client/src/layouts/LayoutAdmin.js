import React, {useState} from "react";
import { Layout } from "antd";
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';

import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const { children } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <MenuSider collapsed={collapsed} />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
        </Header>
        <Content className="layout-admin__content"> 
          {children} 
        </Content>
        <Footer className="layout-admin__footer">
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
}
