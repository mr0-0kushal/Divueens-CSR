import React from "react"
import Header from "./components/Header"
import DivueensCSR from "./components/DivueensCSR"
import Footer from "./components/Footer"
import { useEffect } from 'react'
import './App.css'


function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slidein');
          entry.target.classList.remove('slideout', 'normal-hidden');
        } else {
          entry.target.classList.add('slideout');
          entry.target.classList.remove('slidein');

        }
      });
    });

    const revobserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revslidein');
          entry.target.classList.remove('revslideout', 'reverse-hidden');
        } else {
          entry.target.classList.add('revslideout');
          entry.target.classList.remove('revslidein');

        }
      });
    });

    const hiddenElements = document.querySelectorAll('.normal-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const revHiddenElements = document.querySelectorAll('.reverse-hidden');
    revHiddenElements.forEach((el)=>revobserver.observe(el));

    return () => {
      // Clean up observer on unmount
      hiddenElements.forEach((el) => observer.unobserve(el));
      revHiddenElements.forEach((el)=> revobserver.unobserve(el));
    };
  }, []);

  return (
    <div className="App montserratFont">
      <Header />
      <DivueensCSR />
      <Footer />
    </div>
  )
}
export default App
