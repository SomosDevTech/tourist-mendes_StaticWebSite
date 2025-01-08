import React from "react"
import Header from "./components/Header/Header"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import Footer from "./components/Footer/Footer"
function App(): React.ReactNode {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={(<HomePage />)} />
      </Routes>
      <Footer />  
    </>
  )
}

export default App
