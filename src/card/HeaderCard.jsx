import React from 'react';
import {
    MailFilled,
    HeartFilled,
    TwitterSquareFilled
  } from '@ant-design/icons';

class HeaderCard extends React.Component {
    render(){
        const { username, id, love} = this.props;
        return (<div style={{display:"flex"}}>
            <div style={{marginRight:5}}>
                <HeartFilled style={{color: '#eb2f96'}} />
                <div style={{textAlign:"center"}}>{love}</div>
            </div>
            <div style={{marginRight:5}}>      
                <a href={"https://twitter.com/messages/compose?recipient_id="+id} style={{textAlign:"center",display:"block"}}>
                    <MailFilled></MailFilled>
                    <div style={{textAlign:"center"}}>Message</div>
                </a>
            </div>
            <div>      
                <a href={"https://twitter.com/"+username} style={{textAlign:"center",display:"block"}}>
                    <TwitterSquareFilled />
                    <div style={{textAlign:"center"}}>Follow</div>
                </a>
            </div>
        </div>
    )}
}

export default HeaderCard;