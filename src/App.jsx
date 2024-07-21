import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import bg from './assets/images/bg.jpg'
import MainMenu from './components/MainMenu'
import MainScreen from './components/Screens/MainScreen'

const App = () => {
  return (
    <div className='App overflow-hidden bg-no-repeat bg-cover flex items-center justify-center h-screen '  style={{background: `URL(${bg})`}}>
        <Router>
            <Routes>
                <Route path='/' index exact element={<MainMenu/>}/>
                <Route path='/mainscreen' element={<MainScreen/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default App