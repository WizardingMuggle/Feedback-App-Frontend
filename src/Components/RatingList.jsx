import { useState, useEffect, useContext } from "react"
import FeedbackContext from "../Context/FeedbackContext"

function RatingList({passtofeedback}) {

    const [selected , setSelected] = useState(10)

    const {FeedbackEdit} = useContext(FeedbackContext) 

    useEffect(
      () => {
        setSelected(FeedbackEdit.item.rating)
      },
      [FeedbackEdit]
    )


    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        passtofeedback(+e.currentTarget.value)
      }

  return (
    <div>
       <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default RatingList

