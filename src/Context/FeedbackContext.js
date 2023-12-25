import {createContext , useState } from "react";
import {v4 as uuidv4} from 'uuid'

//returns provider and consumer where consumer is used by useContext
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => 
{
    const [feedback, setFeedback] = useState([
        {
          id: 1,
          rating: 10,
          text: 'She is a lovely doctor and a professional',
        },
        {
          id: 2,
          rating: 9,
          text: 'Lovely Application',
        },
        {
          id: 3,
          rating: 8,
          text: 'Enjoyed working over it!',
        },
      ])

      const[FeedbackEdit, SetFeedbackEdit] = useState({
        item: {} , // empty object is present here
        edit: false
      })

    const deleteFeedback = (id) =>
    {
        if(window.confirm('Are you Sure you want to delete the feedback?'))
        {
            setFeedback(feedback.filter((item) => item.id !== id))
            //returns an array without that value
        }
    }

    const addFeedback = (newFeedback) =>
    {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
    }


    const editFeedback = (item) =>
    {
        SetFeedbackEdit({
            item: item,
            edit: true
        })
    }


    const updateFeedback = (id, updatedItem) =>
    {
        setFeedback(feedback.map((item) => ( item.id === id ? {...item,...updatedItem} : item) 

        ))
    }
    

    return <FeedbackContext.Provider value ={{
        feedback,
        FeedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>

        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext