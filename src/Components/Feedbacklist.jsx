import Card from './Shared/Card'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import {FaEdit, FaTimes} from 'react-icons/fa'


function Feedbacklist({item}) {

  const{deleteFeedback ,editFeedback} = useContext(FeedbackContext)

  return (
    <Card >
        <div className="num-display">
          {item.rating}
        </div>
        <button onClick = {() => deleteFeedback(item.id)} className="close">
        <FaTimes color='purple'/>  
        </button> 
        
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color='purple'/>
        </button>

        <div className="text-display">
            {item.text}
        </div>     
    </Card>
  )
}

Feedbacklist.propTypes=
{
  item: PropTypes.object.isRequired,
}

export default Feedbacklist
