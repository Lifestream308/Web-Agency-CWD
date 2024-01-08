import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='flex justify-between'>
          <div className='flex'>
            <p>ICON</p>
            <h1 className='text-blue-950'>Learning Time Adventures Daycare</h1>
          </div>
          <div className='flex'>
            <a href="">Contact</a>
            <a href="">Contact</a>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
