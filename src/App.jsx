import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/experience'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import About from './components/about/about'
export default function App() {
  return (
  <>
  <Header/>
  <Nav />
  <About/>
  <Experience/>
  <Portfolio/>
  <Contact/>
  <Footer/>
  </>
  )
}
