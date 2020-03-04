import React from 'react';
import './App.css';

const User = (props) => {
  return (
    <div className='UserCard'>
      <div className='UserCardTop'>
        <img src={props.pic} />
      </div>
      <div className='UserCardBottom'>
        <h3>{props.name}</h3>
        <h5>{props.email}</h5>
        <h5>{props.job}</h5>
      </div>
    </div>
  );
}

function App() {
  return (
    <div class="listOfCards">
      <User name = 'Naruto Uzumaki'
            email = 'naruto@konoha.gov'
            pic = 'https://vignette.wikia.nocookie.net/naruto/images/4/42/Naruto_Part_III.png/revision/latest/scale-to-width-down/300?cb=20180117103539'
            job = 'Project Manager'/>
      <User name = 'Sasuke Uchiha'
            email = 'sasuke@konoha.gov'
            pic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrmfXsmvbR1rYFRFwX_2AEc7127qgeB86_eoLd7b9Mn0qfaUx'
            job = 'Bussinest Analyst' />
      <User name = 'Himawari Uzumaki'
            email = 'himawari@konoha.gov'
            pic = 'https://vignette.wikia.nocookie.net/naruto/images/2/26/Himawari.png/revision/latest/scale-to-width-down/340?cb=20171115100745'
            job = 'FrontEnd Developer' />
    </div>
  )
}

export default App;
