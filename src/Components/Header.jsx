import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Header({text,bgColor,textColor}) {
   
    const headerstyle ={
        backgroundColor: bgColor,
        color:textColor,
    }

  return (
    <header style = {headerstyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps =
{
    text:'Feedback Page',
    bgColor: 'black',
    textColor: 'white',
}

Header.propTypes ={
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
