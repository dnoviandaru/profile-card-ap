import React from 'react';
import { Card, Button} from 'antd';
import {
    LikeOutlined,
    DislikeOutlined,
  } from '@ant-design/icons';
import HeaderCard from './HeaderCard';
  
class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      love : 0
    }
  }
  handleLiked = () => {
    this.setState({
      love: this.state.love + 1
    })
  }

  handleUnliked = () => {
    if(this.state.love > 0) {
      this.setState({
        love: this.state.love - 1
      })
    }
  }

  render() {
    const {name, pic, username, id} = this.props;
    return (
      <Card title={name} style={{ width: 300 }} extra={<HeaderCard username={username} id={id} love={this.state.love}></HeaderCard>}>   
        <img alt="" src={pic} style={{maxWidth: '100%', height: 200}}></img>
      <div style={{marginTop: 5}}>
        <Button icon={<DislikeOutlined />} onClick={this.handleUnliked}>Dislike</Button>
        <Button icon={<LikeOutlined />} onClick={this.handleLiked}>Like</Button>
      </div>
      </Card>
    );
  }
}

export default User;