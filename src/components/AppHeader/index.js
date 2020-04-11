import React from 'react';
import './style.scss';


const AppHeader = () => {

    return (
      <div className="headerTop">
        <ul>
          <li>
            <p>Upcoming</p>
            Live Consultations
          </li>
          <li>
          	Buy Plans
          </li>
          <li>
            View Plans
          </li>
          <li><button type="button" >Login</button></li>
        </ul>
      </div>
    );
  
}

export default AppHeader;
