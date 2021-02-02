import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const SiteHeader = () => {
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Module 1</Menu.Item>
        <Menu.Item key="2">Module 2</Menu.Item>
        <Menu.Item key="3">Module 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default SiteHeader;
