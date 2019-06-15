import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Sider } = Layout;

export default class MyLayout extends Component {
  onClick = ({ item, key, keyPath, domEvent }) => {
    console.log("item: ", item);
    console.log("key: ", key);
    console.log("keyPath: ", keyPath);
    console.log("domEvent: ", domEvent);
  };

  onTitleClick = ({ key, domEvent }) => {};

  render() {
    return (
      <div className="distance-layout">
        <Layout>
          <Header className="distance-header">
            <div className="logo">SANFYU</div>
            <div className="navigation">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">主页</Menu.Item>
                <Menu.Item key="2">主页2</Menu.Item>
                <Menu.Item key="3">主页3</Menu.Item>
                <Menu.Item key="4">主页4</Menu.Item>
                <Menu.Item key="5">主页5</Menu.Item>
              </Menu>
            </div>
            {/* <div className="login">登录</div> */}
          </Header>
          <Layout className="distance-content">
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                onClick={this.onClick}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      Java
                    </span>
                  }
                  onTitleClick={this.onTitleClick}
                >
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      JavaScript
                    </span>
                  }
                >
                  <Menu.Item key="4">option4</Menu.Item>
                  <Menu.Item key="5">option5</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            {this.props.children}
          </Layout>
        </Layout>
      </div>
    );
  }
}
