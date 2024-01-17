// import { useState } from 'react'
import './App.css'
import BGColorSectionComponent from './components/BGColorSectionComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import MainSectionsComponent from './components/MainSectionsComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <MainSectionsComponent />
      <FooterComponent />
    </>
  )
}

export default App
