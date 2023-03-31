import { useEffect, useState } from 'react'
import './App.css'
import { Display } from './Components/Display/Display'

import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className="App">
          <Nav></Nav>
          <Display></Display>
    </div>
  )
}

export default App
