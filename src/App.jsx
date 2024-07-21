import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import bg from './assets/images/bg.jpg'
import MainMenu from './components/MainMenu'
import MainScreen from './components/Screens/MainScreen'

const App = () => {
  return (
      <Router>
            <Routes>
                <Route path='/' index exact element={<MainMenu/>}/>
                <Route path='/mainscreen' element={<MainScreen/>}/>
            </Routes>
        </Router>
  
  )
}

export default App