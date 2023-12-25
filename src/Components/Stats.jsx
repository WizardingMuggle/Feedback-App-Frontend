
import { useContext } from 'react';
import FeedbackContext from '../Context/FeedbackContext';

function Stats() {


//old way of doing it but works totally fine
// let sum =0;
// for(let i=0;i<feedback.length;i++)
// {
//     sum += feedback[i].rating;
// }

const{feedback} = useContext(FeedbackContext)

let average = feedback.reduce((acc,cur) =>
    {   
        return acc + cur.rating
    },0);
    average = average/feedback.length;

    average = average.toFixed(1);

  return (
    <div className="feedback-stats">
    <h4>{feedback.length} Reviews</h4>
    <h4>Average Rating :{isNaN(average) ? 0 : average}</h4>
    </div>
  )
}



export default Stats
