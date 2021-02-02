import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import SiteHeader from "./components/siteHeader";
import SideTreeMenu from "./components/sideTreeMenu";
const { Content } = Layout;

const Demo = () => {
  return (
    <Layout>
      <SiteHeader />
      <Content style={{ padding: "0 8px" }}>
        <Layout className="site-layout-background">
          <SideTreeMenu />
          <Content
            style={{
              padding: "24px",
              minHeight: 280,
              background: "white"
            }}
          >
            Content
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

ReactDOM.render(<Demo />, document.getElementById("container"));
