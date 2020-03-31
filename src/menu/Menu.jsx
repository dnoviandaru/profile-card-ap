import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu} from 'antd';
import {
    TwitterOutlined,
    SettingOutlined,
  } from '@ant-design/icons';
const { Search } = Input;


class NavBar extends React.Component {
    render () {
        const { selectedKeys} = this.props;
        return(
        <div className="menu">
          <Menu onClick={this.handleClick} selectedKeys={selectedKeys} mode="horizontal">
            <Menu.Item key="twitter">
              <TwitterOutlined />
              <Link to="/">Profile Twitter</Link> 
            </Menu.Item>
            <Menu.Item key="profile">
              <SettingOutlined />
              <Link to="/profile">Profile</Link> 
            </Menu.Item>
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