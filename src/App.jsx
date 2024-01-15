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
      <div className='mt-8 flex flex-col gap-8 px-[6%]'>
        <HeaderComponent />
        <MainSectionsComponent />
      </div>
      <BGColorSectionComponent />
      <FooterComponent />
    </>
  )
}

export default App
