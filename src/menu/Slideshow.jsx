import React from 'react';
import { Carousel } from 'antd';

class Slideshow extends React.Component {
    render(){
        return(
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
        )
    }
}

export default Slideshow;