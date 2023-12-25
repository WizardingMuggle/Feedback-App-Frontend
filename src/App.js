import React from 'react'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Header from "./Components/Header";
import Feedbackitem from "./Components/Feedbackitem";
import Stats from "./Components/Stats";
import FeedBackForm from "./Components/FeedBackForm";
import About from './Pages/About';
import AboutIcon from './Components/AboutIcon';
import { FeedbackProvider } from './Context/FeedbackContext';

function App() {    
  return (
    <FeedbackProvider>
    <Router>
      <Header/>

      <div className='container'>
        <Routes>
          <Route exact path='/' element={
            <>

              <FeedBackForm/>
              <Stats/>
              <Feedbackitem/>
              <AboutIcon/>
            </>
          }>
             
          </Route>
        
        <Route exact path='/About' element={<About/>} />
        </Routes>
      </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App
