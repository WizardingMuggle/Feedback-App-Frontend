import Feedbacklist from './Feedbacklist'
// import PropTypes from 'prop-types'
import {motion , AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

function Feedbackitem() {

    const {feedback} = useContext(FeedbackContext)

    if(!feedback ||feedback.length ===0)
    {
        return <p>There's No FeedBack Yet!</p>
    } 
    
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {
                feedback.map((item) =>
                (   
                    <motion.div 
                    key={item.id}
                    initial ={{opacity :0}}
                    animate = {{opacity:1}}
                    exit = {{opacity:0}}
                    >


                          <Feedbacklist 
                         key ={item.id} 
                         item = {item} 
                    />
                    </motion.div>
                  
                ))
            }
        </AnimatePresence>
        </div>
        
  )
}


// Feedbackitem.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )
// }

export default Feedbackitem
