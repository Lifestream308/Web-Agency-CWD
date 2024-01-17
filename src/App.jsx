// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import MainSectionsComponent from './components/MainSectionsComponent'
import AboutComponent from './components/AboutComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path='/' element={ <MainSectionsComponent /> } />
        <Route path='/about' element={ <AboutComponent /> } />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
