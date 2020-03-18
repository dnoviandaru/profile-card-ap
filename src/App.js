import React from 'react';
import './App.css';
import { Card, Row , Col, Button, Input, Carousel, Menu} from 'antd';
import {
  MailOutlined,
  TwitterOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const { Search } = Input;

const { SubMenu } = Menu;

class User extends React.Component {
  render() {
    const {name, username, pic, id} = this.props;
    return (
      <Card title={name} style={{ width: 300 }} extra={<div><Button href={"https://twitter.com/messages/compose?recipient_id="+id} style={{marginRight:5}} type="primary" shape="circle" icon={<MailOutlined />} size={"small"} />
      <Button type="primary" href={"https://twitter.com/"+username} shape="round" size={"small"}>Follow</Button></div>}>   
        <img alt="" src={pic} style={{maxWidth: '100%', height: 200}}></img>
        <p>{username}</p>
      </Card>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Dwi Noviandaru',
          username: 'DwiNoviandaru',
          id: '1195143715318161408',
          pic: 'https://pbs.twimg.com/profile_images/1195144314201886720/sba4hMRf_400x400.jpg',
        },
        {
          name: 'Layndo Sfr.',
          username: 'layndoaqsa',
          id: '393109460',
          pic: 'https://pbs.twimg.com/profile_images/1210810066791616512/e_eUuBEe_400x400.jpg'
        },        
        {
          name: 'Afyad Kafa',
          username: 'Kafyad',
          id: '99896863',
          pic: 'https://pbs.twimg.com/profile_images/1180900634662297600/eZn5wv_r_400x400.jpg'
        },
        {
          name: 'Ady',
          username: 'adypamunqkas',
          id: '2268790320',
          pic: 'https://pbs.twimg.com/profile_images/1228534261197598726/xcNI0ZPl_400x400.jpg'
        },
      ],
      searchText: '',
      current: 'twitter',
    }
  }

  searchText = res => {
    this.setState({searchText: res});
  }

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };

  render() {
    return (
      <div>
        <div className="menu">
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
              onSearch={value => this.setState({
                searchText: value,
              })}
              style={{ width: 200 }}
              />
            </Menu.Item>
          </Menu>
        </div>
        <div className="slideshow">
          <Carousel autoplay dotPosition={"right"} style={{padding:5}}>
            <div>
              <h2>“Be yourself; everyone else is already taken.” ― Oscar Wilde</h2>
            </div>
            <div>
              <h2>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ― Bernard M. Baruch</h2>
            </div>
            <div>
              <h2>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ― Dr. Seuss</h2>
            </div>
          </Carousel>
        </div>
        <div className="card">
          <Row gutter={[16,16]} style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          {
            this.state.users
            .filter(user => (
              user.name.toLowerCase().includes(this.state.searchText.toLowerCase())                     
            ))
            .map((user, index) => (
              <Col key={index} className="gutter-row" span={5}>
                <User name={user.name} username={user.username} pic={user.pic} id={user.id} />
              </Col>
            ))
          }          
          </Row>
        </div>
      </div>
    );
  }
}

export default App;