import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

const CreateCard = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
            + Create Course
          </button>
        }
      >
        {close => (
       <>
         <div>
           <p>Create new Course</p>
         </div>
         <button
           type="button"
           className="trigger-button"
           onClick={() => close()}
         >
           Close
         </button>
       </>
     )}
      </Popup>
    </div>
  )

export default CreateCard
