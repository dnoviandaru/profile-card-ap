import React from 'react';
import { Input, Menu} from 'antd';
import {
    TwitterOutlined,
    SettingOutlined,
  } from '@ant-design/icons';
const { Search } = Input;

const { SubMenu } = Menu;

class NavBar extends React.Component {
    render () {
        const { selectedKeys} = this.props;
        return(
        <div className="menu">
          <Menu onClick={this.handleClick} selectedKeys={selectedKeys} mode="horizontal">
            <Menu.Item key="twitter">
              <TwitterOutlined />
              Profile Twitter
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <SettingOutlined />
                  Setting
                </span>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="search" style={{borderBottom:'transparent', float:"right"}}>
              <Search key="search-box" className="search-box"
              placeholder="Find Profile..."
              onSearch={this.props.onSearch}
              style={{ width: 200 }}
              />
            </Menu.Item>
          </Menu>
        </div>
    )}
}

export default NavBar;