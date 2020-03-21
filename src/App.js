import React from 'react';
import './App.css';
import { Row , Col } from 'antd';
import User from './card/User';
import NavBar from './menu/Menu';
import Slideshow from './menu/Slideshow';

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

  render() {
    return (
      <div>
        <NavBar selectedKeys={this.state.current} onSearch={this.searchText}></NavBar>
        <Slideshow></Slideshow>
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