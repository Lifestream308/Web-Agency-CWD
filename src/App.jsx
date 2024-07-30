import { Route, Routes } from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import HomePageComponent from './components/HomePageComponent'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'

function App() {

  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path='/' element={ <HomePageComponent /> } />
        <Route path='/about' element={ <AboutComponent /> } />
        <Route path='/contact' element={ <ContactComponent /> } />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
