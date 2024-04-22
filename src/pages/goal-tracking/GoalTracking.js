// import Stack from '@mui/material/Stack';
// import { Gauge } from '@mui/x-charts/Gauge';
// import * as React from 'react';
// import './style.css';


//   return (
//     <div>

//       <div className='section-1'>
//         <div className='welcome-box'>
//           <p className='name-section'>Hi, Lily 👋</p>
//           <p className='welcome-section'>Let's pursue dreams, conquer goals!</p>
//         </div>
//         <input className='search-input' type="text" name="" id="" placeholder='Search your Goal'/>

//         <button className='add-btn' id="popupBtn" onclick="togglePopup()">+add</button>

//         <div class="popup" id="myPopup">
//           <div class="popup-content">
//           </div>
//         </div>
//       </div>



//       <div>section 2</div>
//       <div>section 3</div>
//     </div>
//   );
// }
// export default GoalTracking;



import React, { useState } from 'react';
import './style.css';

const GoalTracking = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <div className='section-1'>
        <div className='welcome-box'>
          <p className='name-section'>Hi, Lily 👋</p>
          <p className='welcome-section'>Let's pursue dreams, conquer goals!</p>
        </div>
        <div className="input-btn-container">
          <input className='search-input' type="text" name="" id="" placeholder='Search your Goal'/>
          <button className='add-btn' onClick={togglePopup}>+add</button>
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="close" onClick={togglePopup}>&times;</span>
            <div className="popup-content">
              Popup!
            </div>
          </div>
        </div>
      )}

      <div>section 2</div>
      <div>section 3</div>
    </div>
  );
};

export default GoalTracking;
