import { useState, useContext, useEffect } from 'react'
import Card from './Shared/Card'
import Button from './Shared/Button'
import RatingList from './RatingList'
import FeedbackContext from '../Context/FeedbackContext'

function FeedBackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisable , setbtnDisable] = useState(true)
    const [message, setMessage] = useState('')


    const{addFeedback , FeedbackEdit , updateFeedback} = useContext(FeedbackContext)


    useEffect(
      () => {
        if(FeedbackEdit.edit===true)
        {
          setbtnDisable(false)
          setText(FeedbackEdit.item.text)
          setRating(FeedbackEdit.item.rating)
        }
      },
      [FeedbackEdit]
    )

    const handleTextChange = (e) =>
    {
      if(text === '')
      {
        setbtnDisable(true)
        setMessage(null)
      }
      else if(text !=='' && text.trim().length <10)
      {
        setMessage("Length of Review is less than 10.")
        setbtnDisable(true)
      }
      else{
        setMessage(null)
        setbtnDisable(false)
      }
        
        setText(e.target.value)
    }


    const handleSubmit = (e) =>
    {
      e.preventDefault()
      
      if(text.trim().length >=10)
      {
        const newfeedback =
        {
          text: text,
          rating:rating
        }
        //calling of the function
        FeedbackEdit.edit === true
        ? updateFeedback(FeedbackEdit.item.id, newfeedback)
        : addFeedback(newfeedback);
      
       
        //After send the review empty the text
        setText('')
      }
    }


  return (
    <Card>
            <form onSubmit={handleSubmit}>
                <h2>Would you like share your Experience?</h2>
                <RatingList passtofeedback={(x) => setRating(x)}/>
                <div className="input-group">
                    <input  onChange={handleTextChange} 
                    type="text" 
                    placeholder='Write Here' 
                    value = {text} 
                    />
                    <Button type='submit'  isDisabled = {btnDisable}> Enter!</Button>
                </div>
                {message && <div className='message'>
                {message}
                </div>
}
            </form>
    </Card>
    

  )
}

export default FeedBackForm
