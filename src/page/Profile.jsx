import React from 'react';
import NavBar from '../menu/Menu';
import Fade from 'react-reveal/Fade';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTagline: [//Line 1 For Header
                'Hi 👋 You found me! I am Dwi Noviandaru.',
                //Line 2 For Header
                'Tennis Player ',
                //Line 3 For Header
                'from Yogyakarta'
            ]
        }
    }
    render() {
        return (
            <div>
                <NavBar selectedKeys="profile"></NavBar>
                <Fade top>
                    <p className='header-title'>
                    {this.state.headerTagline[0]}<br></br>{this.state.headerTagline[1]}<br></br>
                    {this.state.headerTagline[2]}
                    <br></br></p>
                </Fade>
            </div>
        );
    }
}

export default Profile;