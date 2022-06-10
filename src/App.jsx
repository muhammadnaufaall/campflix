import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Girls from './components/Movies/Girls'
import Boys from './components/Movies/Boys'
import Drama from './components/Movies/Drama'


function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <Girls />
        <Boys />
        <Drama />
    </>
  )
}

export default App