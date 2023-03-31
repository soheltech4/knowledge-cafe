import { useEffect, useState } from 'react'
import './App.css'
import Blog from './Components/Blog/Blog'
import { Display } from './Components/Display/Display'
import Nav from './Components/Nav/Nav'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
          <Nav></Nav>
          <Display></Display>
          <Blog></Blog>
          <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
