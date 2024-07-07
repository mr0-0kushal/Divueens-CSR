import React from "react"
import Header from "./components/Header"
import DivueensCSR from "./components/CareerCSR/CareerCSR"
import Footer from "./components/Footer"
import './input.css'

import '../src/components/CareerCSR/CareerCSR.css'


function App() {

  return (
    <div className="App" style={{fontFamily: '"Montserrat", sans'}}>
      {/* <Header /> */}
      <DivueensCSR />
      {/* <Footer /> */}
    </div>
  )
}
export default App
