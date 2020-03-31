import React from 'react';
import NavBar from '../menu/Menu';
import Slideshow from '../menu/Slideshow';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Slideshow></Slideshow>
            </div>
        );
    }
}

export default Profile;