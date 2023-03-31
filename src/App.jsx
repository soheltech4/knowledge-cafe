import { useEffect, useState } from 'react'
import './App.css'
import Blog from './Components/Blog/Blog'
import { Display } from './Components/Display/Display'

import Nav from './Components/Nav/Nav'

function App() {
  return (
    <div className="App">
          <Nav></Nav>
          <Display></Display>
          <Blog></Blog>
    </div>
  )
}

export default App
