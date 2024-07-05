import React from "react"
import Header from "./components/Header"
import DivueensCSR from "./components/DivueensCSR"
import Footer from "./components/Footer"

import './App.css'


function App() {

  return (
    <div className="App" style={{fontFamily: '"Montserrat", sans'}}>
      <Header />
      <DivueensCSR />
      <Footer />
    </div>
  )
}
export default App
