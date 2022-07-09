import React from "react";
// import { Route } from "react-router-dom";
import { Layout } from "antd";


export default function LayoutBasic(props) {
  const { children } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu Sider Layout Basic</h2>
      <Layout>
        <Header>Header...</Header>
        <Content>{children}</Content>
        <Footer>Footer...</Footer>
      </Layout>
    </Layout>
  );
}
